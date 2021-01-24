console.log('1');

setTimeout(() => console.log('2'), 0);

const promise = new Promise(resolve => {
    console.log('3');
    resolve();
})

promise.then(result => console.log('4'));

console.log('5');

// 1 console.log
// 3 new Promise
// 5 console.log
// 4 promise.then
// 2 setTimeout
