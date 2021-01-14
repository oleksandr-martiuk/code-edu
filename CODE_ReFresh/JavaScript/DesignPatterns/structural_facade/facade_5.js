// Subsystems:
class Bank {
   verify(name, amount) {
      // complex logic ...
      return true;
   }
}

class Credit {
   get(name) {
      // complex logic ...
      return true;
   }
}

class Background {
   check(name) {
      // complex logic ...
      return true;
   }
}

// 'Facade'
class Mortgage {
   constructor(name) {
      this.name = name;
   }
   applyFor(amount) {
      // access multiple subsystems...
      let result = "approved";

      if (!new Bank().verify(this.name, amount)) {
         result = "denied";
      } else if (!new Credit().get(this.name)) {
         result = "denied";
      } else if (!new Background().check(this.name)) {
         result = "denied";
      }
      return `${this.name} has been ${result} for a ${amount} mortgage`;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const mortgage = new Mortgage("Joan Templeton");
const result = mortgage.applyFor("$100,000");

console.log(result);
