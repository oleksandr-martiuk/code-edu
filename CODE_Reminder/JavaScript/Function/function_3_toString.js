// Note the comment between the `function` keyword and the function name, as well as the space following the function name.
function /* a comment */ foo () {}
console.log(foo.toString()); // → 'function /* comment */ foo () {}'

//----------------------------------------------------------------------------------------------------------------------

function yo(arr) {
   const { a, b } = arr;
   const c = 77;
   return a + b + c;
}

console.log(yo.toString());

// function yo(arr) {
//    const { a, b } = arr;
//    const c = 77;
//    return a + b + c;
// }

//----------------------------------------------------------------------------------------------------------------------

console.log(Object.keys.toString()); // function keys() { [native code] }

//----------------------------------------------------------------------------------------------------------------------

class Person {
   constructor(name, surname) {
      this.name = name;
      this.surName = surname;
   }
   getFullName(){
      return `${this.name} ${this.surName}`;
   }
}

console.log(Person.toString());

// class Person {
//    constructor(name, surname) {
//       this.name = name;
//       this.surName = surname;
//    }
//    getFullName(){
//       return `${this.name} ${this.surName}`;
//    }
// }
