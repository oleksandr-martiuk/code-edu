class Controller {
   up = () => console.log('Slowly moving Up');
   down = () => console.log('Slowly moving Down');
   turnRight = () => console.log('Turning to the right');
   turnLeft = () => console.log('Turning to the left');
}

class AdvancedController {
   up = () => console.log('Force Up');
   down = () => console.log('Force Down');
   right = () => console.log('Force Right');
   left = () => console.log('Force Left');
   flip = () => console.log("Let's flip! o_O");
   loop = () => console.log("A-a-a-nd loop! :)");
}

class Gadget {
   constructor(controller) {
      this.c = controller;
   }
   execute = command => {
      try {
         this.c[command]();
      } catch(e) {
         command = command.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
         console.log(`***ERROR***: "${command}" is not supported by controller`)
      }
   }
}

class Quadcopter extends Gadget {
   constructor(controller) {
      super(controller);
   }
}

class Helicopter extends Gadget {
   constructor(controller) {
      super(controller);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const simpleController = new Controller();
const superController = new AdvancedController();

const drone = new Quadcopter(simpleController);

drone.execute('up');
drone.execute('down');
drone.execute('flip');

console.log('\n');
const superDrone = new Quadcopter(superController);
superDrone.execute('up');
superDrone.execute('left');
superDrone.execute('turnRight');
superDrone.execute('loop');
superDrone.execute('down');
