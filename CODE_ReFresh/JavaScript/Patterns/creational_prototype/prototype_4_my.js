// Interface of Prototype
class AbstractPrototype {
   constructor(proto) {
      this.proto = proto || {};
   }
   clone(){
      throw "method clone() not implemented yet";
   }
}

class City {
   constructor(name, country, amount) {
      this.name = name;
      this.country = country;
      this.amount = amount;
   }
   getAllSportsman = num => `In the ${this.name}-City exist ${num}'000 of sportsman`;
   buildNewMonument = (name, street) => `New monument ${name} is build on the ${street} str.`;
}

// Concrete Prototype ---> CityPrototype
class CityPrototype extends AbstractPrototype {
   constructor(proto) {
      super(proto);
   }
   clone() {
      const prototype = new City();
      Object.keys(this.proto).forEach(key => (prototype[key] = this.proto[key]));
      return prototype;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const city = new City('Washington', 'USA', 250);
const prototype = new CityPrototype(city);
const cityClone = prototype.clone();

console.log(cityClone);
console.log(cityClone.getAllSportsman(17));
