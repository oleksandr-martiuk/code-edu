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


const charOperations = [
   { from: yoko, args: ['All you need is love.'] },
   { from: yoko, args: ['I love you John.'] },
   { from: john, args: ['Hey, no need to broadcast', yoko] },
   { from: ringo, args: ['Paul, what do you think?', paul] }
];

charOperations.forEach(({ from, args }) => {
   from.send(...args);
   console.log('-------------------------------------');
});
