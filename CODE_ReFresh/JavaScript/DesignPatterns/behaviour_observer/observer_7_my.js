class Subject {
   constructor() {
      this.subscribers = [];
   }
   subscribe(subscriber){
      this.subscribers.push(subscriber);
   }
   unSubscribe(subscriber){
      this.subscribers = this.subscribers.filter(item => item !== subscriber);
   }
   execute(command, ...args) {
      this.subscribers.forEach(subscriber => {
         subscriber[command] && subscriber[command](...args)
      });
      console.log('-------------------------------------------------------------------')
   }
}

// List of Observers -----------------------------------------------------------------------

class Jumper {
   constructor(name) {
      this.name = name;
      this.jobType = 'jumper';
   }
   jump = distance => console.log(`${this.name}: ${this.jobType} is going to jump to the ${distance} meters`);
   who = () => console.log(`${this.name}: I'm a ${this.jobType}`);
}

class Speaker {
   constructor(name) {
      this.name = name;
      this.jobType = 'speaker';
   }
   prepareSpeech = () => console.log(`${this.name} is preparing to the speech`);
   performSpeech = stage => console.log(`${this.name}: ${this.jobType} is started to perform a speech on the "${stage}"`);
   who = () => console.log(`${this.name}: Hello friends! I'm a ${this.jobType}. Glad to see you!`);
}

class Drone {
   constructor(brand, engineType) {
      this.brand = brand;
      this.engineType = engineType;
   }
   startEngine = () => console.log(`${this.brand}: Drone engine is started`);
   control = side => console.log(`${this.brand}: The "${this.brand}" drone is moving to ${side}`);
   returnHome = () => console.log(`${this.brand}: The ${this.engineType} drone is returning home by GPS`);
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const subject = new Subject();

const jumperIgor = new Jumper('Igor')
const speakerAdam = new Speaker('Adam')
const droneYoshi = new Drone('Yoshi', 'multi-rotor')
const droneMoYo = new Drone('MoYo', 'single-rotor')

//------------------------------------------------------------------

subject.subscribe(jumperIgor);
subject.subscribe(speakerAdam);
subject.subscribe(droneYoshi);
subject.subscribe(droneMoYo);

subject.execute('who');
subject.execute('jump', 10.5);
subject.execute('startEngine');
subject.execute('performSpeech', 'Palace Arena');

subject.unSubscribe(jumperIgor);

subject.execute('who');
