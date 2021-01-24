const keys = Object.getOwnPropertyNames(Promise.prototype);
console.log('Promise.prototype keys: ', keys);

console.log('------------------------------------------------------');

console.log('then description:');
console.log(Object.getOwnPropertyDescriptors(Promise.prototype.then));

console.log('------------------------------------------------------');
