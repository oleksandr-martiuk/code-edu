class MyClass {
   constructor(name) {
      this.name = name;
   }
   getName() {
      return this.name;
   }
   getSecret() {
      return this._secret;
   }
}

Object.defineProperty(MyClass, "_secret", {
   value: "This is private",
   writable: true,
   /*, enumerable: false (default if undefined) */
});

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const myClass = new MyClass('Joe');

console.log(myClass._secret);
console.log(myClass.getSecret());
