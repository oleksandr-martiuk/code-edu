const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
   let name = require('url').parse(req.url, true).query.name;

   if (!name) name = 'world';
   if (name === 'burningbird') {
      // const file = 'phoenix.jpg';
      const file = 'phoenix_0.jpg'; // wrong file-name
      fs.stat(file, function(err, stat) {
         if (err) {
            console.error(err);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Sorry, Burningbird isn't around right now`);
         } else {
            // Asynchronous version:
            const img = fs.readFileSync(file);
            res.contentType = 'image/jpg';
            res.contentLength = stat.size;
            res.end(img, 'binary');
         }
      })
   } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Hello ${name}`);
   }
}).listen(8124);

console.log('Server running at http://localhost:8124/');
