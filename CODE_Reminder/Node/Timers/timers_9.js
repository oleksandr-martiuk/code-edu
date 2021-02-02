const interval = setInterval(function(name) {
   console.log('Hello ' + name);
}, 1000, 'Shelley');

setTimeout(function(interval) {
   clearInterval(interval);
   console.log('cleared timer');
}, 5100, interval);

console.log('waiting on first interval...');
