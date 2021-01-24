// Interface of CarController
class TargetInterface {
   unlockDoor = () => {
      throw 'method unlockDoor() is not implemented yet';
   };
   lockDoor = () => {
      throw 'method lockDoor() is not implemented yet';
   }
   turnIgnitionOn = () => {
      throw 'method turnIgnitionOn() is not implemented yet';
   }
   turnIgnitionOff = () => {
      throw 'method turnIgnitionOff() is not implemented yet';
   }
   turnStickToDrive = () => {
      throw 'method turnStickToDrive() is not implemented yet';
   }
   turnStickToReverse = () => {
      throw 'method turnStickToReverse() is not implemented yet';
   }
   turnStickToParking = () => {
      throw 'method turnStickToParking() is not implemented yet';
   }
   pushBrakePedal = () => {
      throw 'method pushBrakePedal() is not implemented yet';
   }
   pushAccelerator = () => {
      throw 'method pushAccelerator() is not implemented yet';
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// EXISTED SERVICE: Interface, used by CUSTOMER
class CarController extends TargetInterface {
   constructor(name, model, year) {
      super();
      this.name = name;
      this.model = model;
      this.year = year;
   }
   unlockDoor = () => console.log('Door is unlocked');
   lockDoor = () => console.log('Door is locked');
   turnIgnitionOn = () => console.log('Engined is fired');
   turnIgnitionOff = () => console.log('Engined is turned off');
   turnStickToDrive = () => console.log('The car is going forward');
   turnStickToReverse = () => console.log('The car is going back');
   turnStickToParking = () => console.log('The car is going back');
   pushBrakePedal = () => console.log('The brake pedal is pushed');
   pushAccelerator = () => console.log('Accelerator is pushed');
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// HELPFUL SERVICE (ADAPTEE) for the EXISTED SERVICE ---> needs to be adapted to the EXISTED SERVICE
class ModernCarController {
   constructor(producer, model) {
      this.producer = producer;
      this.model = model;
      this.lock = true;
      this.ignition = false;
      this.radioOn = false;
   }
   toggleLock = () => {
      this.lock = !this.lock;
      console.log(`The doors are '${this.lock ? 'Locked':'Opened'}'`);
   };
   pushIgnitionButton = () => {
      this.ignition = !this.ignition;
      console.log(`The engine is '${this.ignition ? 'Fired':'Turned off'}'`);
   }
   switchTheSpeedLever = (position = 'P') => {
      switch (position) {
         case 'D':
            this.position = position;
            console.log('The car is going to go Forward');
            break;
         case 'R':
            this.position = position;
            console.log('The car is going to go Back');
            break;
         default:
            this.position = 'P';
            console.log('Car is on the Parking state');
      }
   }
   brakes = () => console.log('The brakes is pushed');
   accelerate = () => console.log('The car is accelerating');
   toggleRadio = () => {
      if (this.ignition) {
         this.radioOn = !this.radioOn;
         console.log(`The radio is '${this.lock ? 'turned-on':'turned-off'}'`);
      }
      console.log('Not possible to turn radio on (engine is not working)');
   }
   getCarState = () => {
      console.log('The doors are: ', this.lock);
      console.log('Engine is: ', this.ignition);
      console.log('Radio is on: ', this.radioOn);
      console.log('Lever is on the: ', this.position);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// ADAPTER for the EXISTED SERVICE
class CarControllerAdapter extends TargetInterface {
   constructor(producer, model) {
      super();
      this.producer = producer;
      this.model = model;
      this.modernController = new ModernCarController(producer, model);
      this.modernController.lock = true;
      this.modernController.ignition = false;
   }
   lockDoor = () => {
      if (!this.modernController.lock) this.modernController.toggleLock();
      else console.log('The doors are already closed');
   }
   unlockDoor = () => {
      if (this.modernController.lock) this.modernController.toggleLock();
      else console.log('The doors are already opened');
   }
   turnIgnitionOn = () => {
      if (!this.modernController.ignition) this.modernController.pushIgnitionButton();
      else console.log('Engine is already fired');
   }
   turnIgnitionOff = () => {
      if (this.modernController.ignition) this.modernController.pushIgnitionButton();
      else console.log('Engine is already turned off');
   }
   // TODO: methods below could be implemented
   // turnStickToDrive = () => ...;
   // turnStickToReverse = () => ...;
   // turnStickToParking = () => ...;
   // pushBrakePedal = () => ...;
   // pushAccelerator = () => ...;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// CUSTOMER:

const car = new CarControllerAdapter('YoshiCars', 'YoMoLo-123');
car.unlockDoor();
car.unlockDoor();
car.turnIgnitionOn();
car.turnIgnitionOff();
car.lockDoor();
