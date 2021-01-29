const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('event', (a, b) => {
   // setImmediate(() => {
   setTimeout(args => {
      console.log('this happens asynchronously: ', [...args, '!'].join(' '));
   }, 1000, ['Hello', 'world']);
});

myEmitter.emit('event', 'a', 'b');
