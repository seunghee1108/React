const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 요청이 '/'인 경우에는 index.html 파일을 읽어서 응답합니다.
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    const stream = fs.createReadStream(filePath);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    stream.pipe(res);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
 });