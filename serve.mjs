import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
const root = resolve("dist");
const port = Number(process.env.PORT || 4174);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".webp": "image/webp", ".svg": "image/svg+xml", ".mp4": "video/mp4" };
createServer((request, response) => {
  let file;
  try {
    const path = new URL(request.url, "http://localhost").pathname;
    file = resolve(root, path === "/" ? "index.html" : `.${decodeURIComponent(path)}`);
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }
  if (!file.startsWith(root + sep) || !existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  const size = statSync(file).size;
  const headers = { "Content-Type": types[extname(file)] || "application/octet-stream", "Accept-Ranges": "bytes" };
  const range = request.headers.range;
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    let start = match?.[1] ? Number(match[1]) : Math.max(0, size - Number(match?.[2]));
    let end = match?.[1] ? (match[2] ? Math.min(Number(match[2]), size - 1) : size - 1) : size - 1;
    if (!match || !Number.isInteger(start) || !Number.isInteger(end) || start < 0 || start >= size || end < start) {
      response.writeHead(416, { "Content-Range": `bytes */${size}` });
      response.end();
      return;
    }
    response.writeHead(206, { ...headers, "Content-Range": `bytes ${start}-${end}/${size}`, "Content-Length": end - start + 1 });
    if (request.method === "HEAD") response.end();
    else createReadStream(file, { start, end }).pipe(response);
    return;
  }
  response.writeHead(200, { ...headers, "Content-Length": size });
  if (request.method === "HEAD") response.end();
  else createReadStream(file).pipe(response);
}).listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}`));
