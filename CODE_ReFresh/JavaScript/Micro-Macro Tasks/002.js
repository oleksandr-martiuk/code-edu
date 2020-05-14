console.log('1');

setTimeout(() => console.log('2'), 0);

const promise = Promise.resolve().then(result => console.log('3'))

console.log('4');

// 1 console.log
// 4 console.log
// 3 promise.then
// 2 setTimeout
