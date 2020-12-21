class Driver {
   constructor(command) {
      this.command = command;
   }
   execute() {
      this.command.execute();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Engine {
   constructor() {
      this.state = false;
   }
   on() {
      this.state = true;
   }
   off() {
      this.state = false;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Command {
   constructor(engine) {
      this.engine = engine;
   }
   execute() {
      throw new Error('execute() not defined');
   }
}

class OnStartCommand extends Command {
   execute() {
      this.engine.on();
   }
}

class OnSwitchOffCommand extends Command {
   execute() {
      this.engine.off();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const engine = new Engine();
console.log(engine);

const onStartCommand = new OnStartCommand(engine); // Command
const driver = new Driver(onStartCommand);

driver.execute();

console.log(engine);
