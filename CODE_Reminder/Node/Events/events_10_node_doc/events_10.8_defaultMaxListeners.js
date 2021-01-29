const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter
   // .setMaxListeners(emitter.getMaxListeners() + 1)
   .once('event-1', () => emitter.setMaxListeners(11))
   .on('event-1', () => console.log('1'))
   .on('event-1', () => console.log('2'))
   .on('event-1', () => console.log('3'))
   .on('event-1', () => console.log('4'))
   .on('event-1', () => console.log('5'))
   .on('event-1', () => console.log('6'))
   .on('event-1', () => console.log('7'))
   .on('event-1', () => console.log('8'))
   .on('event-1', () => console.log('9'))
   .on('event-1', () => console.log('10'))
   .on('event-1', () => console.log('14'))
   .on('event-1', () => console.log('15'))
   .on('event-2', () => console.log('11'))
   .on('event-3', () => console.log('12'))
   .on('event-4', () => console.log('13'))
;

// (node:31729)
// MaxListenersExceededWarning:
//    Possible EventEmitter memory leak detected.
//    11 event-1 listeners added to [EventEmitter].
//    Use emitter.setMaxListeners() to increase limit
// (Use `node --trace-warnings ...` to show where the warning was created)
