// Director
class Shop {
   construct(builder){
      builder.step1();
      builder.step2();
      return builder.get();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Product #1
class Car {
   constructor() {
      this.doors = 0;
   }
   addParts() {
      this.doors = 4;
   }
   who(){
      console.log("I am a " + this.doors + "-door car");
   }
}

// Builder #1
class CarBuilder {
   constructor() {
      this.car = null;
   }
   step1() {
      this.car = new Car();
   }
   step2() {
      this.car.addParts();
   }
   get() {
      return this.car;
   }
}

/* .................................................... */

// Product #2
class Truck {
   constructor() {
      this.doors = 0;
   }
   addParts() {
      this.doors = 2;
   }
   who(){
      console.log("I am a " + this.doors + "-door truck");
   }
}

// Builder #2
class TruckBuilder {
   constructor() {
      this.truck = null;
   }
   step1() {
      this.truck = new Truck();
   }
   step2() {
      this.truck.addParts();
   }
   get() {
      return this.truck;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const shop = new Shop(); // 'director' instance

const carBuilder = new CarBuilder(); // car's 'builder' instance
const truckBuilder = new TruckBuilder(); // truck's 'builder' instance

const car = shop.construct(carBuilder);
const truck = shop.construct(truckBuilder);

car.who();
truck.who();
