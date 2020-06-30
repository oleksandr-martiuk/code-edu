const Dog = function (fName, sName) {
   this.fName = fName;
   this.sName = sName;

   this.voice = (sound) => {
      console.log(`${this.fName} ${this.sName} barks: '${sound}'!`);
   }
}

// Методы и свойства объявленные внтури ф-и инкапсулируются и не имеют доступа из вне
Dog.prototype.run = function () {
   console.log(`${this.fName} is running...`);
}

const Ban = new Dog('Banny', 'Tompson');

// Методы, обьявленные при помощи prototype могут быть изменены
Ban.voice('woff-woooof-wof');
Ban.run();

console.log(Ban);

//-----------------------------------------------------------------------------------
Dog.prototype.run = () => console.log("I don't have voice =(");
console.log(Object.keys(Dog));
//-----------------------------------------------------------------------------------

const Tor = new Dog('Tor', 'Kurason');
console.log(Tor);

Tor.run();
