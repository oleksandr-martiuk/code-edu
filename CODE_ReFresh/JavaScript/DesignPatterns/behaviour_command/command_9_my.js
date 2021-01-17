class Invoker {
   setInvoker(command) {
      this.command = command;
   }
}

class SpeakerCommand {
   constructor(receiver, commandNames) {
      this.receiver = receiver;
      this.executeName = commandNames.current || null;
      this.previousName = commandNames.previous || null;
   }
   execute = () => this.executeName ? this.receiver[this.executeName]() : this.receiver.notExist('execute');
   previous = () => this.previousName ? this.receiver[this.previousName]() : this.receiver.notExist('previous');
}

class SpeakerReceiver {
   constructor(firstName, surName) {
      this.firstName = firstName || '';
      this.surName = surName || '';
   }
   prepare = () => console.log(`${this.getFullName()} prepares materials to the event`);
   practice = () => console.log('Training of speech is going...');
   represent = () => console.log(`${this.getFullName()} presents new innovation on current event`);
   notExist = methodName => console.log(`(!) ${methodName} method does not exist for such command`);

   getFullName = () => `${this.firstName} ${this.surName}`;
}

class PrepareCommand extends SpeakerCommand {
   constructor(receiver) {
      super(receiver, { current: 'prepare' });
   }
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
