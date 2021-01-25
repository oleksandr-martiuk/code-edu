const http = require('http');
const server = http.createServer();
const PORT = 5000;

server.on('request', (req, res) => {
   console.log('request event');

   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Hello world');
})

server.on('connection', () => {
   console.log('connection event');
})

server.listen(PORT, () => {
   console.log('listening event');
})

console.log(`Server running on port http://localhost:${PORT}/`);
