const arr = [];
const map = new Map();

//----------------------------------------------------------------------------------------------------------------------

let joe = { name: 'Joe', age: 33 };

arr.push(joe);
map.set(joe, '...');

console.log(joe);
console.log(arr);
console.log(map.keys());

joe.age = 66;

console.log(joe);
console.log(arr);
console.log(map.keys());
