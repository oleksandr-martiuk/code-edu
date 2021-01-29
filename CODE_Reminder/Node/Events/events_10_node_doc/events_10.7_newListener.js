const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
   // Insert a new listener in front
   if (event === 'event') myEmitter.on('event', () => console.log('B'));
});
myEmitter.on('event', () => console.log('A'));

//-------------------------------------------------------------------------------

myEmitter.emit('event');
// Prints:
//   B
//   A
