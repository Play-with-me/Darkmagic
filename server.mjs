import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Readable } from 'node:stream';
import app from './menh-quan-ritual-release/dist/server/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5173;
const HOST = process.env.HOST || '127.0.0.1';
const CLIENT_DIR = path.resolve(__dirname, 'menh-quan-ritual-release/dist/client');

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

const server = http.createServer(async (req, res) => {
  try {
    const hostHeader = req.headers.host || `${HOST}:${PORT}`;
    const parsedUrl = new URL(req.url, `http://${hostHeader}`);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // 1. Try static assets from client directory
    const filePath = path.normalize(path.join(CLIENT_DIR, pathname));
    if (filePath.startsWith(CLIENT_DIR) && fs.existsSync(filePath)) {
      const stat = fs.statSync(filePath);
      if (stat.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mime = MIME_TYPES[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', mime);
        res.setHeader('Content-Length', stat.size);
        if (pathname.startsWith('/_next/static/') || pathname.startsWith('/fonts/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          res.setHeader('Cache-Control', 'public, max-age=3600');
        }
        fs.createReadStream(filePath).pipe(res);
        return;
      }
    }

    // 2. Delegate to Next.js / Vinext SSR handler
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
      res.setHeader(k, v);
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
  console.log(`✨  MỆNH QUÁN - ĐÔNG PHƯƠNG BÁT TỰ CHIÊM NGHIỆM`);
  console.log(`🌟  Máy chủ đang chạy tại: http://${HOST}:${PORT}/`);
  console.log(`   (Mở trình duyệt truy cập: http://localhost:${PORT}/)`);
  console.log(`======================================================\n`);
});
