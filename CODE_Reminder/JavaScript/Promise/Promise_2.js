const promKeys = Object.getOwnPropertyNames(Promise);
console.log(promKeys);

const promCon = Promise.prototype.constructor;
console.log('Promise construction: ', promCon);

const p1 = new Promise(resolve => {
    setTimeout(() => {
        return resolve('Some Promise result: ')
    }, 1000);
});

const p2 = p1.then(result => result + ' [1-st then] ');

p2.then(result => {
    const var2 = ' [2-nd then]';
    console.log(result + var2);
})
