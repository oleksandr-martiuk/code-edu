/** 5 - work on the next each 1 sec. */
setInterval(() => console.log('setInterval::1000'), 1000);

/** 4 - work on the next iteration */
setImmediate(() => console.log('setImmediate'));

/** 3 - work on the next iteration in 0 sec. */
setTimeout(() => console.log('setTimeout::0'), 0);

/** 2 - works on the same iteration */
process.nextTick(() => console.log('process.nextTick'));

/** 1 - first operation in current iteration */
console.log('Hello world!');
