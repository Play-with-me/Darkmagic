import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RELEASE_DIR = path.resolve(__dirname, 'menh-quan-ritual-release');
const SERVER_ENTRY = path.resolve(RELEASE_DIR, 'dist/server/index.js');
if (!fs.existsSync(SERVER_ENTRY)) {
  const archivePath = path.resolve(RELEASE_DIR, 'ritual-release.tar.gz');
  if (fs.existsSync(archivePath)) {
    console.log('📦 Đang tự động giải nén gói phát hành ritual-release.tar.gz...');
    execFileSync('tar', ['-xzf', archivePath, '-C', RELEASE_DIR], { stdio: 'inherit' });
  }
}

const { default: app } = await import('./menh-quan-ritual-release/dist/server/index.js');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5173;
const HOST = process.env.HOST || '127.0.0.1';
const CLIENT_DIR = path.resolve(__dirname, 'menh-quan-ritual-release/dist/client');
const ATLAS_DIR = path.resolve(__dirname, 'src/atlas');
const STYLES_DIR = path.resolve(__dirname, 'src/styles');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

// Transform Reading-CEebwCfN.js to mount our 5-Map AtlasChartResult
function transformReadingChunk(code) {
  let out = code;
  if (!out.includes('/atlas/AtlasChartResult.mjs')) {
    out = `import{AtlasChartResult}from"/atlas/AtlasChartResult.mjs";\n` + out;
  }
  out = out.replace(
    'if(h.current)return;e(t(a))',
    'if(h.current)return;e({...t(a),_birthInput:a})'
  );
  const start = out.indexOf('function L_(');
  const end = out.indexOf('var R_=[', start);
  if (start !== -1 && end !== -1) {
    const replacement =
      'function L_({chart:e,signedIn:t,onSaved:n,onExit:r}){return v.createElement(AtlasChartResult,{React:v,chart:e,signedIn:t,onSaved:n,onExit:r,SummaryEditor:s,summarySchema:d,baseNotes:I_(e)})}';
    out = out.slice(0, start) + replacement + out.slice(end);
  }
  return out;
}

const server = http.createServer(async (req, res) => {
  try {
    const hostHeader = req.headers.host || `${HOST}:${PORT}`;
    const parsedUrl = new URL(req.url, `http://${hostHeader}`);
    const pathname = decodeURIComponent(parsedUrl.pathname);

    // 1. Serve /atlas/ritual-atlas.css from src/styles/ritual-atlas.css
    if (pathname === '/atlas/ritual-atlas.css') {
      const cssFile = path.join(STYLES_DIR, 'ritual-atlas.css');
      if (fs.existsSync(cssFile)) {
        const content = fs.readFileSync(cssFile, 'utf-8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(content);
        return;
      }
    }

    // 2. Serve /atlas/*.mjs from src/atlas/
    if (pathname.startsWith('/atlas/')) {
      const rel = pathname.slice('/atlas/'.length);
      const atlasFile = path.normalize(path.join(ATLAS_DIR, rel));
      if (atlasFile.startsWith(ATLAS_DIR) && fs.existsSync(atlasFile) && fs.statSync(atlasFile).isFile()) {
        const ext = path.extname(atlasFile).toLowerCase();
        res.statusCode = 200;
        res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        fs.createReadStream(atlasFile).pipe(res);
        return;
      }
    }

    // 3. Intercept Reading-CEebwCfN.js & ClientApp-COG-eH4S.js to wire 5-Map Atlas and bust cache
    if (pathname.endsWith('/Reading-CEebwCfN.js')) {
      const readingPath = path.join(CLIENT_DIR, '_next/static/chunks/Reading-CEebwCfN.js');
      if (fs.existsSync(readingPath)) {
        const rawCode = fs.readFileSync(readingPath, 'utf-8');
        const patched = transformReadingChunk(rawCode);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(patched);
        return;
      }
    }

    if (pathname.endsWith('/ClientApp-COG-eH4S.js')) {
      const clientAppPath = path.join(CLIENT_DIR, '_next/static/chunks/ClientApp-COG-eH4S.js');
      if (fs.existsSync(clientAppPath)) {
        const rawCode = fs.readFileSync(clientAppPath, 'utf-8');
        const patched = rawCode.replaceAll('Reading-CEebwCfN.js', 'Reading-CEebwCfN.js?v=atlas8');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(patched);
        return;
      }
    }

    // 4. Static assets from client directory
    const filePath = path.normalize(path.join(CLIENT_DIR, pathname));
    if (filePath.startsWith(CLIENT_DIR) && fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', mime);
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Cache-Control', 'no-cache');
        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }

    // 5. Delegate to Next.js / Vinext SSR handler
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          for (const v of value) headers.append(key, v);
        } else {
          headers.set(key, value);
        }
      }
    }

    const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
    const webReq = new Request(parsedUrl.toString(), {
      method: req.method,
      headers,
      body: hasBody ? Readable.toWeb(req) : null,
      duplex: hasBody ? 'half' : undefined,
    });

    const env = {
      ACCEPT_NEW_READINGS: 'true',
    };

    const ctx = {
      waitUntil: () => {},
      props: {},
    };

    const webRes = await app.fetch(webReq, env, ctx);

    res.statusCode = webRes.status;
    for (const [k, v] of webRes.headers.entries()) {
      if (k.toLowerCase() === 'content-length') continue;
      res.setHeader(k, v);
    }

    const contentType = webRes.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      let html = await webRes.text();
      html = html
        .replaceAll('ClientApp-COG-eH4S.js', 'ClientApp-COG-eH4S.js?v=atlas8')
        .replaceAll('Reading-CEebwCfN.js', 'Reading-CEebwCfN.js?v=atlas8')
        .replace(
          '</head>',
          '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Serif+SC:wght@400;600;700&family=Noto+Serif+TC:wght@400;600;700&family=Zhi+Mang+Xing&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="/atlas/ritual-atlas.css?v=atlas8"/></head>'
        );
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('Clear-Site-Data', '"cache"');
      res.end(html);
      return;
    }

    if (webRes.body) {
      Readable.fromWeb(webRes.body).pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    console.error(`[Server Error] ${req.method} ${req.url}:`, err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Internal Server Error: ' + (err.message || String(err)));
    }
  }
});

server.listen(PORT, HOST, () => {
  console.log(`\n======================================================`);
  console.log(`✨  MỆNH QUÁN - ĐÔNG PHƯƠNG BÁT TỰ CHIÊM NGHIỆM (5 MAPS ATLAS)`);
  console.log(`🌟  Máy chủ đang chạy tại: http://${HOST}:${PORT}/`);
  console.log(`   (Mở trình duyệt truy cập: http://localhost:${PORT}/)`);
  console.log(`======================================================\n`);
});
