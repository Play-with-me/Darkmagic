import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';
import { MONETIZATION_CONFIG } from './src/atlas/monetization-config.mjs';
import {
  renderEditorialPage,
  buildRobotsTxt,
  buildSitemapXml,
  buildAdsTxt,
} from './src/atlas/editorial-pages.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Explicit release directory allows a newly built source bundle to be verified
// without overwriting the archived release used by production.
const RELEASE_DIR = path.resolve(__dirname, process.env.MENH_QUAN_RELEASE_DIR || 'menh-quan-ritual-release');
const SERVER_ENTRY = path.resolve(RELEASE_DIR, 'dist/server/index.js');
if (!fs.existsSync(SERVER_ENTRY)) {
  const archivePath = path.resolve(RELEASE_DIR, 'ritual-release.tar.gz');
  if (fs.existsSync(archivePath)) {
    console.log('📦 Đang tự động giải nén gói phát hành ritual-release.tar.gz...');
    execFileSync('tar', ['-xzf', archivePath, '-C', RELEASE_DIR], { stdio: 'inherit' });
  }
}

const { default: app } = await import(new URL(`file:///${SERVER_ENTRY.replaceAll('\\', '/')}`).href);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5173;
const HOST = process.env.HOST || (process.env.RENDER === 'true' ? '0.0.0.0' : '127.0.0.1');
const CLIENT_DIR = path.resolve(RELEASE_DIR, 'dist/client');
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

    // Public ownership proof for Google Search Console.
    if (pathname === '/googlec87d467e5035ff7c.html' &&
        (req.method === 'GET' || req.method === 'HEAD')) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end('google-site-verification: googlec87d467e5035ff7c.html');
      return;
    }

    // Crawlability, AdSense verification, legal & editorial pages.
    if (req.method === 'GET' || req.method === 'HEAD') {
      const forwardedProto = String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim();
      const proto = forwardedProto || (hostHeader.includes('onrender.com') ? 'https' : 'http');
      const requestBaseUrl = `${proto}://${hostHeader}`;

      if (pathname === '/healthz') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(
          req.method === 'HEAD'
            ? undefined
            : JSON.stringify({ status: 'ok', service: 'menh-quan', timestamp: new Date().toISOString() })
        );
        return;
      }

      if (pathname === '/robots.txt') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(req.method === 'HEAD' ? undefined : buildRobotsTxt(requestBaseUrl));
        return;
      }

      if (pathname === '/sitemap.xml') {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        res.end(req.method === 'HEAD' ? undefined : buildSitemapXml(requestBaseUrl));
        return;
      }

      if (pathname === '/ads.txt') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end(req.method === 'HEAD' ? undefined : buildAdsTxt(MONETIZATION_CONFIG));
        return;
      }

      const editorialHtml = renderEditorialPage(pathname, requestBaseUrl);
      if (editorialHtml) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('Cache-Control', 'public, max-age=300');
        res.end(req.method === 'HEAD' ? undefined : editorialHtml);
        return;
      }
    }

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

    // 3. Intercept Reading-CEebwCfN.js, ClientApp-COG-eH4S.js & SiteHeader-DoVcnI5L.js
    const assetVer = 'atlas15';

    if (pathname.endsWith('/Reading-CEebwCfN.js')) {
      const readingPath = path.join(CLIENT_DIR, '_next/static/chunks/Reading-CEebwCfN.js');
      if (fs.existsSync(readingPath)) {
        const rawCode = fs.readFileSync(readingPath, 'utf-8');
        const patched = transformReadingChunk(rawCode).replace(
          '/atlas/AtlasChartResult.mjs',
          `/atlas/AtlasChartResult.mjs?v=${assetVer}`
        );
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(patched);
        return;
      }
    }

    if (pathname.endsWith('/SiteHeader-DoVcnI5L.js')) {
      const headerPath = path.join(CLIENT_DIR, '_next/static/chunks/SiteHeader-DoVcnI5L.js');
      if (fs.existsSync(headerPath)) {
        const rawCode = fs.readFileSync(headerPath, 'utf-8');
        const patched = rawCode.replace(
          '`Cơ sở luận giải`})]})',
          '`Cơ sở luận giải`}),(0,c.jsx)(`a`,{href:`/thu-vien`,className:``,children:`Thư viện`})]})'
        );
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
        const patched = rawCode
          .replaceAll('Reading-CEebwCfN.js', `Reading-CEebwCfN.js?v=${assetVer}`)
          .replaceAll('SiteHeader-DoVcnI5L.js', `SiteHeader-DoVcnI5L.js?v=${assetVer}`)
          .replace(
            '(0,g.jsx)(`a`,{href:`/co-so-luan-giai`,children:`Nguồn tham khảo`})',
            '(0,g.jsx)(`a`,{href:`/co-so-luan-giai`,children:`Nguồn tham khảo`}),(0,g.jsx)(`a`,{href:`/thu-vien`,children:`Thư viện`}),(0,g.jsx)(`a`,{href:`/quyen-rieng-tu`,children:`Chính sách bảo mật`}),(0,g.jsx)(`a`,{href:`/dieu-khoan`,children:`Điều khoản`}),(0,g.jsx)(`a`,{href:`/lien-he`,children:`Liên hệ`})'
          );
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
    const adsenseEnabled = Boolean(
      MONETIZATION_CONFIG.adsense?.enabled && MONETIZATION_CONFIG.adsense?.publisherId
    );
    const adsenseHosts =
      'https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.doubleclick.net https://*.adtrafficquality.google https://www.googletagservices.com https://*.gstatic.com https://*.google.com';

    for (const [k, v] of webRes.headers.entries()) {
      if (k.toLowerCase() === 'content-length') continue;
      if (k.toLowerCase() === 'content-security-policy') {
        let updatedCsp = v
          .replace("style-src 'self' 'unsafe-inline'", "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com")
          .replace("font-src 'self'", "font-src 'self' https://fonts.gstatic.com data:");
        if (adsenseEnabled) {
          for (const directive of ['script-src', 'frame-src', 'img-src', 'connect-src']) {
            if (updatedCsp.includes(directive)) {
              updatedCsp = updatedCsp.replace(directive, `${directive} ${adsenseHosts}`);
            } else {
              updatedCsp = `${updatedCsp}; ${directive} 'self' ${adsenseHosts}`;
            }
          }
        }
        res.setHeader(k, updatedCsp);
        continue;
      }
      res.setHeader(k, v);
    }

    const contentType = webRes.headers.get('content-type') || '';
    if (contentType.includes('text/html')) {
      const adsenseTag = adsenseEnabled
        ? `\n<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(MONETIZATION_CONFIG.adsense.publisherId)}" crossorigin="anonymous"></script>`
        : '';
      let html = await webRes.text();
      html = html
        .replace(
          /<meta\s+name="viewport"[^>]*>/i,
          '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>'
        )
        .replaceAll('SiteHeader-DoVcnI5L.js', `SiteHeader-DoVcnI5L.js?v=${assetVer}`)
        .replaceAll('ClientApp-COG-eH4S.js', `ClientApp-COG-eH4S.js?v=${assetVer}`)
        .replaceAll('Reading-CEebwCfN.js', `Reading-CEebwCfN.js?v=${assetVer}`)
        .replace(
          'Cơ sở luận giải</a></nav>',
          'Cơ sở luận giải</a><a href="/thu-vien" class="">Thư viện</a></nav>'
        )
        .replace(
          '<button>Quyền riêng tư</button><a href="/co-so-luan-giai">Nguồn tham khảo</a>',
          '<button>Quyền riêng tư</button><a href="/co-so-luan-giai">Nguồn tham khảo</a><a href="/thu-vien">Thư viện</a><a href="/quyen-rieng-tu">Chính sách bảo mật</a><a href="/dieu-khoan">Điều khoản</a><a href="/lien-he">Liên hệ</a>'
        )
        .replace(
          '</head>',
          `<meta name="theme-color" content="#0b100e"/>\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Serif+SC:wght@400;600;700&family=Noto+Serif+TC:wght@400;600;700&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&family=Zhi+Mang+Xing&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="/atlas/ritual-atlas.css?v=${assetVer}"/>${adsenseTag}</head>`
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
