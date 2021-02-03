// High resolution Timer --> returns infinite Integer

const begin = process.hrtime.bigint();

const diff = end => (end - begin) / 1000000n;

setTimeout(() => {
   const end = process.hrtime.bigint();
   console.log(' 0ms: ' + diff(end));
}, 0);

setTimeout(() => {
   const end = process.hrtime.bigint();
   console.log(' 10ms: ' + diff(end));
}, 10);

setTimeout(() => {
   const end = process.hrtime.bigint();
   console.log(' 20ms: ' + diff(end));
}, 20);

const fib = n => (n < 2 ? 1 : fib(n - 1) + fib(n - 2));
for (let i=0; i<40; i++) fib(i);

// 0ms: 1709
// 10ms: 1713
// 20ms: 1713
