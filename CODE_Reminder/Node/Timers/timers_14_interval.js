const interval = setInterval(function(name) {
   console.log('Hello', name);
}, 1000, 'Shelley');

const timer = setTimeout(function(interval) {
   clearInterval(interval);
   console.log('cleared timer');
}, 30000, interval);

timer.unref(); // interval is started working continuously

console.log('waiting on first interval...');
