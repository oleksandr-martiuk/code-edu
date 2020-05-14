const promKeys = Object.getOwnPropertyNames(Promise);
console.log(promKeys);

const promCon = Promise.prototype.constructor;
console.log('Prom Con: ', promCon);

const p1 = new Promise(resolve => resolve('Some result'));
const p2 = p1.then(result => result + ' +1 ');

p2.then(result => {
    const var2 = ' +2';
    console.log(result + var2);
})
