class AccountMediator {
   constructor(amount) {
      this.money = amount;
      this.register = [];
   }
   pay(service, price = 0) {
      if (!price) throw new Error('Please provide the price');

      const purchaseStatus = { service: service.name, price };

      if (this.checkPayment(price)) {
         this.money -= price;
         purchaseStatus.msg = 'PAYED';
      } else {
         purchaseStatus.msg = 'Not enough money';
      }
      this.register.push(purchaseStatus);

      return purchaseStatus;
   }
   checkPayment = (price) => (this.money-price >= 0);
   getRegister = () => this.register;
}
/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Service Interface
class Service {
   constructor(account, name) {
      this.account = account;
      this.name = name;
      this.total = 0;
   }
   pay = price => this.account.pay(this, price || this.total)
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Cafe extends Service {
   constructor(account) {
      super(account, 'Cafe');
   }
   makeOrder = () => console.log('Order is made');
   eat = () => console.log('The food was delicious');
   askBill = () => console.log('Asked the bill');
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class Shop extends Service {
   constructor(account) {
      super(account, 'Shop');
   }
   putInCart = (itemName, price) => {
      this.total += price;
      console.log(`${itemName} put in the cart`);
   }
   buyGoods = () => {
      const res = this.pay();
      if (res.msg === 'PAYED') this.total = 0;
      return res;
   }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class CarWashService extends Service {
   constructor(account) {
      super(account, 'CarWash');
   }
   wash = () => console.log('Car is washed');
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const account = new AccountMediator(1000);

const cafe = new Cafe(account);
const shop = new Shop(account);
const carWash = new CarWashService(account);

shop.putInCart('Bread', 50);
shop.putInCart('Milk', 125);
shop.buyGoods();
carWash.wash()
carWash.pay(500);
cafe.makeOrder();
cafe.eat();
cafe.askBill();
cafe.pay(750);

console.log(account.getRegister());
