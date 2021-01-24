class Subject {
   constructor() {
      this.observers = {};
   }
   subscribe(person) {
      this.observers[person.name] = person;
   }
   unsubscribe(person) {
      delete this.observers[person.name];
   }
}

class Magazine extends Subject {
   constructor(magazineName) {
      super();
      this.magazineName = magazineName;
   }
   notify(magazine) {
      for (const client of Object.values(this.observers)) {
         // TODO: here should be implemented method for sending magazine by address of subscriber
         // this.send(magazine, subscriber.address);

         console.log(`
            New version of magazine "${this.magazineName}" #${magazine.number} has been released.
            Sent to ${client.name} by address: "${client.address}"
         `);
         client.magazineReflect();
      }
      console.log('--------------------------------------------------------------------------------------------------');
   }
}

class Person {
   constructor(name, address, msg) {
      this.name = name;
      this.address = address;
      this.reflectMsg = msg;
   }
   magazineReflect() {
      console.log(this.reflectMsg);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const hfMagazine = new Magazine('Hunting & Fishing');

const Tom = new Person('Tom Jonson', 'Kiev, Polytechnic Str., 19', 'Received. Thank you! :|');
const Sony = new Person('Sony Simon', 'Kharkiv, Academica Lebedeva Str., 2', 'Nothing special. :/ as usual...');
const Jim = new Person('Jim Novak', 'Odessa, Friendly str., 76', 'Wow! I like your magazine :)');

hfMagazine.subscribe(Tom);
hfMagazine.subscribe(Jim);
hfMagazine.subscribe(Sony);

hfMagazine.notify({ number: '2020.05.13' })

// remove Tom from subscribers
hfMagazine.unsubscribe(Tom);

hfMagazine.notify({ number: '2020.06.15' })
