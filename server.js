import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'public');
const port = Number(process.env.PORT || 3000);
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.m4a':'audio/mp4', '.webp':'image/webp' };

const server = http.createServer((request, response) => {
  const requested = decodeURIComponent((request.url || '/').split('?')[0]);
  const relative = requested === '/' ? '/index.html' : requested;
  const file = path.resolve(root, `.${relative}`);
  if (!file.startsWith(root)) { response.writeHead(403); response.end('Forbidden'); return; }
  fs.stat(file, (error, stat) => {
    const target = !error && stat.isFile() ? file : path.join(root, 'index.html');
    fs.readFile(target, (readError, data) => {
      if (readError) { response.writeHead(500); response.end('Server error'); return; }
      const type = types[path.extname(target).toLowerCase()] || 'application/octet-stream';
      response.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
      response.end(data);
    });
  });
});
server.listen(port, '0.0.0.0', () => console.log(`DC vs WiZZ listening on ${port}`));
