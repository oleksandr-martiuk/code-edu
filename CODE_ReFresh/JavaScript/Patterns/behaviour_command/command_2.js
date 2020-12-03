// Это Receiver - выполняет реализацию, основную работу.
class Computer {
   constructor () {
      console.log('Computer created');
   }
   start = () => console.log('Computer is started!');
   stop = () => console.log('Computer stopped!');
   reset = () => console.log('Computer is resetting...');
}

// Отправитель, инициатор
class Invoker {
   command;
   constructor() {
      console.log('Invoker created')
   }

   // определяем какая команда будет выполняться при запуске Execute()
   SetCommand(command) {
      this.command = command
   }
}

// это интерфейс для всех команд, обеспечивает единый интерфейс - Execute(), Undo()
class Command {
   constructor() {
      if (this.constructor.name === 'Command') {
         throw new Error(`${this.constructor.name}: can not create instance of interface`);
      }
   }
   Execute() {
      throw new Error(`Не описан метод "Execute" в классе ${this.constructor.name}`);
   }
   // отмена действия
   Undo() {
      throw new Error(`Не описан метод "Undo" в классе ${this.constructor.name}`);
   }
}

// набор команд, создает очередь, можно указать любые команды в любом количестве.
class CommandsQueue extends Command {
   // первый аргумент - receiver, последующие аргументы - команды.
   constructor(receiver, ...commands) {
      super();
      this.commands = commands;
      this.receiver = receiver;
   }
   Execute() {
      console.log('IT IS CommandsQueue:');
      this.commands.forEach(command => command.Execute(this.receiver));
   }
   Undo() {
      console.log('IT IS CommandsQueue UNDO:');
      this.commands.forEach(command => command.Undo(this.receiver));
   }
}

class StartCommand extends Command { // конкретная команда
   constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('StartCommand created')
   }

   Execute() {
      console.log('StartCommand Execute')
      this.receiver.start();
   }
   Undo() {
      console.log('StartCommand undo')
      this.receiver.stop();
   }
}
class StopCommand extends Command { // конкретная команда
   constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('StopCommand created')
   }

   Execute() {
      console.log('StopCommand Execute')
      this.receiver.stop();
   }
   Undo() {
      console.log('StopCommand undo')
      this.receiver.start();
   }
}
class ResetCommand extends Command { // конкретная команда
   constructor(receiver, state) {
      super()
      this.receiver = receiver
      console.log('ResetCommand created')
   }
   Execute() {
      console.log('ResetCommand Execute')
      this.receiver.reset();
   }
   Undo() {
      console.log('ResetCommand undo: отмена невозможна');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

let receiver = new Computer() // выполняет какую-то полезную работу, например запускает компьютер
let start = new StartCommand(receiver);
let stop = new StopCommand(receiver);
let reset = new ResetCommand(receiver);

let invoker = new Invoker() // передает команду клиента в receiver

// Вот это все можно обернуть в класс Client (решает что и когда выполнять.)
invoker.SetCommand(start); // клиент указывает invoker какую команду выполнить
invoker.command.Execute(); // выполняем команду, глобальная точка доступа (несколько клиентов могут запускать выполнение)
invoker.SetCommand(stop);
invoker.command.Execute();
invoker.command.Undo();
invoker.SetCommand(reset);
invoker.command.Execute();
invoker.command.Undo();

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const commandsQueue = new CommandsQueue(receiver, start, reset);
invoker.SetCommand(commandsQueue);
invoker.command.Execute();
invoker.command.Undo();
