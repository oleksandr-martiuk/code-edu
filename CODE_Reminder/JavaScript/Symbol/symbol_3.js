const obj = {
   name: 'Joe',
   surname: 'Black',
   age: 33
}

obj[Symbol('a')] = 'AddisAbaba';
obj[Symbol('a')] = 42;

const keys = [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)];

keys.forEach((key, i) => console.log(key, `= ${obj[key]}`));
