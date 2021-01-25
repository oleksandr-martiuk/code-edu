const fs = require('fs');

setTimeout(() => console.log('callback #1 setTimeout-0'), 0);
setTimeout(() => console.log('callback #2 setTimeout-1'), 1);
setTimeout(() => console.log('callback #3 setTimeout-5'), 5);
setTimeout(() => console.log('callback #4 setTimeout-10'), 10);
setImmediate(() => console.log('callback #5 setImmediate'));
setImmediate(() => console.log('callback #6 setImmediate'));
const s7 = setInterval(() => {
   clearInterval(s7);
   console.log('callback #7 setInterval 0');
}, 0);
const s8 = setInterval(() => {
   clearInterval(s8);
   console.log('callback #8 setInterval 0');
}, 0);
process.nextTick(() => console.log('callback #9 process.nextTick'));
process.nextTick(() => console.log('callback #10 process.nextTick'));
(cb => cb())(() => console.log('callback #11 callback'));
(cb => cb())(() => console.log('callback #12 callback'));
fs.readFile('./all_timers_5.js', 'utf8', () => console.log('callback #13 readFile'));
fs.readFile('./all_timers_5.js', 'utf8', () => console.log('callback #14 readFile'));

console.log('-----Main: FINISH-----');

// callback #11 callback
// callback #12 callback
// -----Main: FINISH-----
// callback #9 process.nextTick
// callback #10 process.nextTick
// callback #1 setTimeout-0
// callback #2 setTimeout-1
// callback #7 setInterval 0
// callback #8 setInterval 0
// callback #5 setImmediate
// callback #6 setImmediate
// callback #3 setTimeout-5
// callback #13 readFile
// callback #14 readFile
// callback #4 setTimeout-10
