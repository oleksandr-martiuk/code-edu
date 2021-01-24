// https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b -----------------

Function.prototype.myCall = function newCall(context, ...args) {
   const fnName = Symbol();
   for (let newContext of [context, ...args]) {
      if (typeof newContext !== 'object') continue;
      newContext[fnName] = this;
      newContext[fnName]();
      delete newContext[fnName];
   }
};

function who() {
   console.log(`${this.name} is ${this.age} years old`)
}

const valera = { name: 'Valera', age: 12 }
const bill = { name: 'Bill', age: 11 }
const jeff = { name: 'Jeff', age: 15 }
const tom = { name: 'Tom', age: 7 }

who.myCall(valera, bill, 55, jeff, {}, 'yo', tom);
