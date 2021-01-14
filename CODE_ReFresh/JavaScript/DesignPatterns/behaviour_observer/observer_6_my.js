class Subject {
   constructor() {
      this.observers = [];
   }

   isExist = (subscriber) => !!this.observers.find(observer => observer.name === subscriber.name);

   check(subscriber) {
      if (!(typeof subscriber === 'object' && subscriber.name && subscriber.type && subscriber.constructor)) {
         throw new Error(`Subscriber ${JSON.stringify(subscriber)} can't be subscribed`);
      }
   }
   subscribe(subscriber) {
      try {
         this.check(subscriber);
         if (this.isExist(subscriber)) {
            throw new Error(`Observer  ${subscriber.type}:${subscriber.name} is already exist`);
         }

         this.observers.push(subscriber);
         console.log(`${subscriber.type}:${subscriber.name} is subscribed successfully`);
      } catch (e) {
         console.log('ERROR: ', e.message);
      }
   }
   unsubscribe(subscriber) {
      try {
         if (!this.isExist(subscriber)) {
            throw new Error(`Observer ${subscriber.name} does not exist`);
         }
         this.observers = this.observers.filter(observer => observer.name !== subscriber.name)
         console.log(`${subscriber.type}:${subscriber.name} is UNSUBSCRIBED`);
      } catch (e) {
         console.log('ERROR: ', e.message);
      }
   }
   fire(event, ...args) {
      this.observers.forEach(observer => {
         if (observer[event] && observer[event] instanceof Function) {
            observer[event](...args);
         }
      })
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Animal {
   constructor(type = '', name = '') {
      this.type = type;
      this.name = name;
   }
}

class Wolf extends Animal {
   constructor(name) {
      super('Wolf', name);
      this.details = {
         legs: 4,
         tail: 1,
         ears: 2,
         tooth: 16
      }
   }
   run() {
      console.log(`"${this.type}:${this.name}" ---> is running...`)
   }
}

class Bear extends Animal {
   constructor(name) {
      super('Bear', name);
      this.details = {}
   }
   run() {
      console.log(`"${this.type}:${this.name}" ---> Surprisingly! But our bear is running pretty fast. o_O`);
   }
   hibernate(monthCount = 3) {
      console.log(`"${this.type}:${this.name}" ---> is went to the winter hibernate for ${monthCount} months`);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const callSeparator = () => console.log('----------------------------------------------------------------------------');
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const subject = new Subject();

const wolfJim = new Wolf('Jim');
const wolfBan = new Wolf('Ban');
const bearBally = new Bear('Bally')

subject.subscribe('hello');
subject.subscribe(wolfJim);
subject.subscribe(wolfJim);
subject.subscribe(wolfBan);
subject.subscribe(bearBally);
callSeparator();

subject.fire('run', 55); // such args do not use in the method run() ---> just for example
callSeparator();

subject.fire('hibernate', 2)
callSeparator();

subject.unsubscribe(wolfJim);
callSeparator();

subject.fire('run');
callSeparator();

subject.fire('hibernate');
