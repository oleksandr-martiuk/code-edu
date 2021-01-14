class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }
  square = () => this.num ** 2;
  cube = () => this.num ** 3;
}

class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }
  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));

console.log(x.execute('square'))
console.log(x.execute('cube'))
console.log(x.execute('square'))

console.log(x.commandsExecuted)
