const person = {
   name: 'Vitaliy',
   getName: function () {
      return this.name;
   }
}

Object.defineProperty(person, "_secret", { value: "This is private", writable: false });

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

console.log(person.name);
console.log(person.getName());

console.log(person._secret); // This is private
person._secret = 'something';
console.log(person._secret); // This is private


// TypeError: Cannot redefine property: _secret
Object.defineProperty(person, "_secret", { writable: true });

// (!) Only when both writable and configurable are false, "Cannot redefine property" will happen.
