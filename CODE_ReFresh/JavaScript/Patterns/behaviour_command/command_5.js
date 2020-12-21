const add = (x, y) => (x + y);
const sub = (x, y) => (x - y);
const mul = (x, y) => (x * y);
const div = (x, y) => (x / y);

class Command {
   constructor(execute, undo, value){
      this.execute = execute;
      this.undo = undo;
      this.value = value;
   }
}

const AddCommand = (value) => new Command(add, sub, value);
const SubCommand = (value) => new Command(sub, add, value);
const MulCommand = (value) => new Command(mul, div, value);
const DivCommand = (value) => new Command(div, mul, value);

const Calculator = function() {
   let current = 0;
   const commands = [];

   const action = command => {
      const name = command.execute.toString().substring(9, 3);
      return name.charAt(0).toUpperCase() + name.slice(1);
   }

   return {
      execute: (command) => {
         current = command.execute(current, command.value);
         commands.push(command);
         console.log(`${action(command)} : ${command.value}`);
      },
      undo: () => {
         const command = commands.pop();
         current = command.undo(current, command.value);
         console.log(`Undo ${action(command)} : ${command.value}`);
      },
      getCurrentValue: () => current
   }
};

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const calculator = Calculator();

calculator.execute(AddCommand(100));
calculator.execute(SubCommand(24));
calculator.execute(MulCommand(6));
calculator.execute(DivCommand(2));

calculator.undo();
calculator.undo();

console.log(calculator.getCurrentValue()); // log
