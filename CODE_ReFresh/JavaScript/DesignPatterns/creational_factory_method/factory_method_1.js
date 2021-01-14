class Factory {
   createEmployee(type) {
      let employee = {};

      if (type === 'fullTime') {
         employee = new FullTime();
      } else if (type === 'partTime') {
         employee = new PartTime();
      } else if (type === 'temporary') {
         employee = new Temporary();
      } else if (type === 'contractor') {
         employee = new Contractor();
      }

      employee.type = type;

      employee.say = () => console.log(employee.type + ": rate " + employee.hourly + "/hour");

      return employee;
   }
}

class FullTime {
   constructor() {
      this.hourly = '$12';
   }
}

class PartTime {
   constructor() {
      this.hourly = '$11';
   }
}

class Temporary {
   constructor() {
      this.hourly = '$10';
   }
}

class Contractor {
   constructor() {
      this.hourly = '$15';
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const employees = [];
const factory = new Factory();

employees.push(factory.createEmployee('fullTime'));
employees.push(factory.createEmployee('temporary'));
employees.push(factory.createEmployee('partTime'));
employees.push(factory.createEmployee('contractor'));

employees.forEach(e => e.say());
