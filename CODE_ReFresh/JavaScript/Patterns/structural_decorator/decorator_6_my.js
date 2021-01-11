// 'Plane' interface
class PlaneInterface {
   constructor(planeName, capacity) {
      this.name = planeName || 'The Plain';
      this.capacity = capacity || 0;
   }
   refuel = () => {
      throw 'method refuel() not implemented yet';
   }
   loadLuggage = () => {
      throw 'method loadLuggage() not implemented yet';
   }
   meetPassengersOnBoard = () => {
      throw 'method meetPassengersOnBoard() not implemented yet';
   }
   takeOff = () => {
      throw 'method takeOff() not implemented yet';
   }
   fly = () => {
      throw 'method fly() not implemented yet';
   }
   sitDown = () => {
      throw 'method sitDown() not implemented yet';
   }
   landPassengers = () => {
      throw 'method landPassengers() not implemented yet';
   }
   unloadLuggage = () => {
      throw 'method unloadLuggage() not implemented yet';
   }
   parkPlane = () => {
      throw 'method parkPlane() not implemented yet';
   }
}

// Main class 'Plane'
class Plane extends PlaneInterface {
   constructor(name, capacity) {
      super(name, capacity);
   }
   refuel = () => console.log(`${this.name} is refuel`);
   loadLuggage = () => console.log(`The luggage is loaded on the board`);
   meetPassengersOnBoard = (amount = 0) => {
      this.amount = amount || this.capacity;
      console.log(`Meeting ${amount} passengers on the board`);
   }
   takeOff = (city = 'FROM') => {
      this.city = city;
      console.log(`${this.name} is took off from the ${this.city}`);
   }
   fly = () => console.log(`We are flying`);
   sitDown = (city = 'INTO') => {
      this.city = city;
      console.log(`${this.name} is sat down in the ${this.city}`);
   }
   landPassengers = () => {
      console.log(`${this.name} is landed ${this.amount} of passengers in the ${this.city}`);
   }
   unloadLuggage = () => console.log(`The luggage is unloaded in the ${this.city} airport`);
   parkPlane = () => console.log(`${this.name} is park in ${this.city}`);
}

function UpgradePlane(plane) {
   return {
      ...plane,
      speed: 0,
      fly: (speed = 700) => (this.speed = speed),
      getSpeed: () => console.log(`We're flying with ${this.speed} km/h`),
      increaseSpeed: (extraSpeed = 0) => (this.speed = extraSpeed ? this.speed + extraSpeed : extraSpeed),
      decreaseSpeed: (extraSpeed = 0) => (this.speed = extraSpeed ? this.speed - extraSpeed : extraSpeed),
      sitDown: (city = 'INTO') => {
         this.speed = 0;
         plane.sitDown(city);
      }
   };
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const a380 = new Plane('Airbus A380', 853);
const upgradedA380 = UpgradePlane(a380);

upgradedA380.refuel();
upgradedA380.loadLuggage();
upgradedA380.meetPassengersOnBoard(467);
upgradedA380.takeOff('Chicago');
upgradedA380.fly();
upgradedA380.getSpeed();
upgradedA380.increaseSpeed(55)
upgradedA380.getSpeed();
upgradedA380.sitDown('Washington');
upgradedA380.landPassengers();
upgradedA380.unloadLuggage();
upgradedA380.parkPlane();
