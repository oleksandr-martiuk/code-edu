function Car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

//-------------------------------------------------------------

console.log(auto instanceof Car);         // true
console.log(auto instanceof Object);      // true
console.log(auto instanceof constructor); // true
