class Participant {
   constructor(name) {
      this.name = name;
      this.chatroom = null;
   }
   send(message, to) {
      this.chatroom.send(message, this, to);
   }
   receive(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
   }
}

class Chatroom {
   constructor() {
      this.participants = {};
   }
   register(participant) {
      this.participants[participant.name] = participant;
      participant.chatroom = this;
   }
   send(message, from, to) {
      if (to) {
         to.receive(message, from);
      } else {
         for (const key in this.participants) {
            const participant = this.participants[key];
            if (participant.name !== from.name) {
               participant.receive(message, from);
            }
         }
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const yoko = new Participant('Yoko');
const john = new Participant('John');
const paul = new Participant('Paul');
const ringo = new Participant('Ringo');

const chatroom = new Chatroom();
chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);
chatroom.register(ringo);

yoko.send("All you need is love.");
console.log('-------------------------------------')
yoko.send("I love you John.");
console.log('-------------------------------------')
john.send("Hey, no need to broadcast", yoko);
console.log('-------------------------------------')
paul.send("Ha, I heard that!");
console.log('-------------------------------------')
ringo.send("Paul, what do you think?", paul);
