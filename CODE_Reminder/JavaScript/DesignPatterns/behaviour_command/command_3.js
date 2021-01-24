class Computer { // Это Receiver - выполняет реализацию, основную работу.
   constructor() {
      console.log('Computer created')
   }
   start = () => console.log('Computer: START!');
   stop = () => console.log('Computer: Stop!');
   reset = () => console.log('Computer: ...reset.');
}

class Invoker { // Отправитель, инициатор
   constructor() {
      console.log('Invoker created')
   }
   // определяем какая команда будет выполняться при запуске Execute()
   SetCommand = (...command) => this.commands = command;
   Execute = () => this.commands.forEach(command => command());
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

let invoker = new Invoker(); // передает команду клиента в receiver
let receiver = new Computer(); // выполняет какую-то полезную работу, например запускает компьютер

// Вот это все можно обернуть в класс Client (решает что и когда выполнять.)
invoker.SetCommand(receiver.start); // клиент указывает invoker какую команду выполнить
invoker.Execute(); // выполняем команду, глобальная точка доступа (несколько клиентов могут запускать выполнение)
invoker.SetCommand(receiver.stop);
invoker.Execute();
invoker.SetCommand(receiver.reset);
invoker.Execute();

invoker.SetCommand(receiver.start, receiver.reset); // можно передавать сколько угодно команд, все выполнятся.
invoker.Execute();
