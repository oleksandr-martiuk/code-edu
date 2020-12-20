class Account {
   constructor(name, balance) {
      this.name = name;
      this.balance = balance;
   }
   pay(orderPrice) {
      if (this.canPay(orderPrice)) {
         console.log(`Paid ${orderPrice} using ${this.name}`);
      } else if (this.incomer) {
         console.log(`Can't pay using ${this.name}`);
         this.incomer.pay(orderPrice);
      } else {
         console.log('Unfortunately, not enough money');
      }
   }
   canPay(amount) {
      return this.balance >= amount;
   }
   setNext(account) {
      if (!account.incomer) {
         this.incomer = account;
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Master extends Account {
   constructor(balance) {
      super('Master Card', balance);
   }
}

class Paypal extends Account {
   constructor(balance) {
      super('Paypal', balance);
   }
}

class Qiwi extends Account {
   constructor(balance) {
      super('Qiwi', balance);
   }
}

class Payoneer extends Account {
   constructor(balance) {
      super('Payoneer', balance);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(600);
const payoneer = new Payoneer(550);

master.setNext(paypal);
paypal.setNext(qiwi);
qiwi.setNext(payoneer);
payoneer.setNext(master);

master.pay(501);
