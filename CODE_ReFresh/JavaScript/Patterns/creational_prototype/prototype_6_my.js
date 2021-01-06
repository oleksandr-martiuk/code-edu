class AbstractPrototype {
   clone(){
      throw 'method clone() not implemented yet';
   }
}

class House extends AbstractPrototype {
   constructor(address, height, width) {
      super();
      this.address = address;
      this.height = height;
      this.width = width;
   }
   clone() {
      return new House(this.address, this.height, this.width);
   }
}

const house = new House('Gagarin str., 10', 6, 60);

const houseClone1 = house.clone();
const houseClone2 = house.clone();

houseClone2.name = 'Big Building';
houseClone2.address = 'Gagarin str., 10-A';
houseClone2.width = 112;

console.log(house);
console.log(houseClone1);
console.log(houseClone2);
