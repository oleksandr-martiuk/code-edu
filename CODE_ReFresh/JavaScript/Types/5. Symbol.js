const obj = { name: 'Bill' }

// -----------------------------------------------------------

const f_symKey = Symbol('my symbol');
obj[f_symKey] = 'Hello';

const s_symKey = Symbol('my symbol');
obj[s_symKey] = 'Hi my dear friend!';

console.log(Object.keys(obj));          // [ 'name' ]

console.log(obj[f_symKey]);             // Hello
console.log(obj[s_symKey]);             // Hi my dear friend!
