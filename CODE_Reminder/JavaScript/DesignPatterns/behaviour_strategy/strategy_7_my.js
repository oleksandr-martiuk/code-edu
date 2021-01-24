class DeviceInterface {
   constructor(brand, type, details) {
      this.brand = brand;
      this.type = type;
      this.brain = details.brain;
      this.cors = details.cors;
   }
   start = () => console.log(`"${this.type}": ${this.type} is started`);
   reload = () => console.log(`"${this.type}": ${this.brand} has been reloaded`);
   turnOff = () => console.log(`"${this.type}": power is turned off`);
}

// Some list of Strategies -----------------------------------

class PCStrategy extends DeviceInterface {
   constructor() {
      const details = { brain: 'rocket', cors: 8 };
      super('Tanaka', 'pc', details);
   }
   start = () => console.log(`[custom] ${this.brain}-engine of "${this.brand}" is always working`)
}
class SmartphoneStrategy extends DeviceInterface {
   constructor() {
      const details = { brain: 'super', cors: 4 };
      super('Yoshi', 'smartphone', details);
   }
   turnOff = () => console.log(`[custom] "${this.type}" doesn't have button 'POWER OFF'`);
}
class PocketPCStrategy extends DeviceInterface {
   constructor() {
      const details = { brain: 'power', cors: 16 };
      super('Nakamura', 'pocketPC', details);
   }
}

//------------------------------------------------------------

class Context {
   constructor(strategy) {
      this.strategy = strategy;
   }
   setNewStrategy = (strategy) => (this.strategy = strategy);
   getStrategy = () => this.strategy;
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const context = new Context(new SmartphoneStrategy);
let device = context.getStrategy()
device.start();
device.turnOff();
controller.setNewStrategy(new PCStrategy)
device = context.getStrategy()
device.start();
device.reload();
