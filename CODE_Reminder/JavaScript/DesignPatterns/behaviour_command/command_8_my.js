class Controller {
   up = () => console.log(`moving Up`);
   down = () => console.log(`moving Down`);
   forward = () => console.log(`moving forward`);
   back = () => console.log(`moving back`);
   right = () => console.log(`turning Right`);
   left = () => console.log(`turning Left`);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Command {
   constructor(controller, payloadKey) {
      this.controller = controller;
      this.payloadKey = payloadKey;
   }
   execute = () => {
      this.controller[this.payloadKey]();
   }
}

class Up extends Command {
   constructor(controller) {
      super(controller, 'up');
   }
}
class Down extends Command {
   constructor(controller) {
      super(controller, 'down');
   }
}
class Forward extends Command {
   constructor(controller) {
      super(controller, 'forward');
   }
}
class Back extends Command {
   constructor(controller) {
      super(controller, 'back');
   }
}
class Right extends Command {
   constructor(controller) {
      super(controller, 'right');
   }
}
class Left extends Command {
   constructor(controller) {
      super(controller, 'left');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Drone {
   constructor(props) {
      this.up = props.up;
      this.down = props.down;
      this.forward = props.forward;
      this.back = props.back;
      this.right = props.right;
      this.left = props.left;
   }
   moveUp = () => this.up.execute();
   moveDown = () => this.down.execute();
   moveForward = () => this.forward.execute();
   moveBack = () => this.back.execute();
   turnRight = () => this.right.execute();
   turnLeft = () => this.left.execute();
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const controller = new Controller();
const drone = new Drone({
   up: new Up(controller),
   down: new Down(controller),
   forward: new Forward(controller),
   back: new Back(controller),
   right: new Right(controller),
   left: new Left(controller)
});

drone.moveUp();
drone.moveUp();
drone.turnLeft();
drone.moveForward();
drone.turnRight();
drone.turnRight();
drone.moveBack();
drone.moveDown();
drone.moveDown();
