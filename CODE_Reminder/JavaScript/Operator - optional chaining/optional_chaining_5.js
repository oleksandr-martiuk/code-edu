let myMap = new Map();
myMap.set("foo", {name: "baz", desc: "inga"});

// let nameBar = myMap.get("bar").name; // TypeError: Cannot read property 'name' of undefined

let nameBar = myMap.get("bar")?.name;
console.log(nameBar); // undefined
