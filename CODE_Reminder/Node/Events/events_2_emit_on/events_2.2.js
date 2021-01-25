const em = new (require('events')).EventEmitter();
let counter = 0;
setInterval(() => em.emit('timed', counter++), 1000);
em.on('timed', data => console.log('timed: ', data));
