const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

function InputChecker(name, file) {
   this.name = name;
   const path = './' + file + '.txt';
   const options = {
      flags: 'a',
      encoding: 'utf8',
      mode: 0o666
   };
   this.writeStream = fs.createWriteStream(path, options);
}

util.inherits(InputChecker, eventEmitter);

InputChecker.prototype.check = function check(input) {
   let command = input.trim().substr(0, 3); // removing unnecessary gaps

   if (command === 'wr:') this.emit('write', input.substr(3, input.length));
   else if (command === 'en:') this.emit('end');
   else this.emit('echo', input);
};

let ic = new InputChecker('Shelley', 'output');

ic.on('write', function(data) {
   this.writeStream.write(data, 'utf8');
});
ic.on('echo', function( data) {
   process.stdout.write(ic.name + ' wrote ' + data);
});
ic.on('end', function() {
   process.exit();
});

//--------------------------------------------------------------------------------

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
   const input = process.stdin.read();
   if (!input) ic.check(input);
})
