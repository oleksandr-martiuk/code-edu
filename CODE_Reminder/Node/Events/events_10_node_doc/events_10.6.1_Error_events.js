const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//-----------------------------------------------------

// myEmitter.emit('error', new Error('whoops!'));
// Throws and crashes Node.js

//-----------------------------------------------------

myEmitter.on('error', (err) => {
   console.error(`there was an error: ${err.message}`);
});

myEmitter.emit('error', new Error('whoops!'));
// Prints: 'there was an error: whoops!'
