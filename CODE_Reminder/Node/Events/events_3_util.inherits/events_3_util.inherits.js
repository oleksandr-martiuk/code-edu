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

InputChecker.prototype.check = function (input) {
   let command = input.trim().substr(0, 3); // removing unnecessary gaps

   if (command === 'wr:') this.emit('write', input.substr(3, input.length-2));
   else if (command === 'en:') this.emit('end');
   else this.emit('echo', input);
};

let ic = new InputChecker('Shelley', 'output');

ic.on('write', function(data) {
   this.writeStream.write(data, 'utf8')
});
ic.on('write', function(data) {
   console.log(`This is second listener of type "write"`);
});
ic.on('echo', function( data) {
   process.stdout.write(ic.name + ' wrote ' + data);
});
ic.on('end', function() {
   process.exit();
});

console.log(ic.eventNames());
console.log(ic.listenerCount('write'));

//----------------------------------------------------------------------------------------

process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
   let input = process.stdin.read();
   if (input) ic.check(input);
})
