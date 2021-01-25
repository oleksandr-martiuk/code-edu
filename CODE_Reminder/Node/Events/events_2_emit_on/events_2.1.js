const events = require('events'); // add module 'events'
const em = new events.EventEmitter(); // create an instance of EventEmitter

let counter = 0;

setInterval(function() {
   em.emit('timed', counter++); // emit an event 'timed'
}, 3000);

em.on('timed', function(data) {
   console.log('timed: ', data);
});
