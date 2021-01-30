const EventEmitter = require('events');
const myEmitter = new EventEmitter();



let m = 0;
myEmitter.on('event-1', () => console.log(++m));
myEmitter.emit('event-1'); // Prints: 1
myEmitter.emit('event-1'); // Prints: 2

console.log('------------------------------------------');

let k = 0;
myEmitter.once('event-2', () => console.log(++k));
myEmitter.emit('event-2'); // Prints: 1
myEmitter.emit('event-2'); // Ignored
