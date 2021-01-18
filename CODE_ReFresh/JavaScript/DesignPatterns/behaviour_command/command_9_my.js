class Invoker {
   setInvoker(command) {
      this.command = command;
   }
}

class SpeakerReceiver {
   constructor(firstName, surName) {
      this.firstName = firstName || '';
      this.surName = surName || '';
   }
   prepare = () => console.log(`${this.getFullName()} prepares materials to the event`);
   practice = () => console.log('Training of speech is going...');
   represent = () => console.log(`${this.getFullName()} presents new innovation on current event`);

   getFullName = () => `${this.firstName} ${this.surName}`;
}

class SpeakerCommand {
   constructor(receiver, commandNames) {
      this.receiver = receiver;
      this.executeName = commandNames.current || null;
      this.previousName = commandNames.previous || null;
   }
   execute = () => this.receiver[this.executeName]();
   previous = () => this.receiver[this.previousName]();
}

class PrepareCommand extends SpeakerCommand {
   constructor(receiver) {
      super(receiver, { current: 'prepare' });
   }
   // TODO: custom implementation of main method 'previous'
   previous = () => console.log(`"PrepareCommand" does not have "previous" method`);
}
class TrainingCommand extends SpeakerCommand {
   constructor(receiver) {
      super(receiver, { current:'practice', previous:'prepare' });
   }
}
class RepresentCommand extends SpeakerCommand {
   constructor(receiver) {
      super(receiver, { current:'represent', previous:'practice' });
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const receiver = new SpeakerReceiver('Ivan', 'Ivanov');

const prepare = new PrepareCommand(receiver);
const training = new TrainingCommand(receiver);
const represent = new RepresentCommand(receiver);

const invoker = new Invoker();

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

invoker.setInvoker(prepare);
invoker.command.execute();       // Ivan Ivanov prepares materials to the event
invoker.command.previous();      // null

invoker.setInvoker(training);
invoker.command.execute();       // Training of speech is going...
invoker.command.previous();      // Ivan Ivanov prepares materials to the event

invoker.setInvoker(represent);
invoker.command.previous();      // Training of speech is going...
invoker.command.execute();       // Ivan Ivanov presents new innovation on current event
