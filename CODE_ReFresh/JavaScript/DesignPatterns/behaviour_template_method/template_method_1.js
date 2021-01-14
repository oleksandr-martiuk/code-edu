class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }
  responsibilities() {}
  work = () => `${this.name} is responsible for: ${this.responsibilities()}`;
  getPaid = () => `${this.name}'s salary: ${this.salary}`;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }
  responsibilities = () => 'creating the programs';
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }
  responsibilities = () => 'testing';
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const dev = new Developer('Vlad', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Eva', 90000)
console.log(tester.getPaid())
console.log(tester.work())
