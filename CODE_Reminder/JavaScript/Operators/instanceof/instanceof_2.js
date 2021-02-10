// defining constructors
function C() {}
function D() {}

let o = new C()

console.log('o instanceof C: ', o instanceof C); // true, because: Object.getPrototypeOf(o) === C.prototype
console.log('o instanceof D: ', o instanceof D); // false, because D.prototype is nowhere in o's prototype chain
console.log('o instanceof Object: ', o instanceof Object); // true
console.log('C.prototype instanceof Object: ', C.prototype instanceof Object); // true

C.prototype = {}
let o2 = new C()

console.log('o2 instanceof C: ', o2 instanceof C); // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
console.log('o instanceof C: ', o instanceof C);

D.prototype = new C()  // add C to [[Prototype]] linkage of D
let o3 = new D()

console.log('o3 instanceof D: ', o3 instanceof D); // true
console.log('o3 instanceof C: ', o3 instanceof C); // true since C.prototype is now in o3's prototype chain
