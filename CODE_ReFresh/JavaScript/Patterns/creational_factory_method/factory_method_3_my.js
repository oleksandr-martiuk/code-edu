// TODO: creating 'AbstractProduct'
class AbstractRestaurant {
   constructor(type = null, seatAmount = 0) {
      this.type = type;
      this.seats = seatAmount;
   }

   getSeatOrder = () => {
      throw 'method getSeatOrder() not implemented yet';
   }
   isOrder = () => {
      throw 'method isOrder() not implemented yet';
   }
   leadToTable = () => {
      throw 'method leadToTable() not implemented yet';
   }
   findFreeSeats = () => {
      throw 'method findFreeSeats() not implemented yet';
   }
   giveMenu = () => {
      throw 'method giveMenu() not implemented yet';
   }
   getOrderByMenu = () => {
      throw 'method getOrderByMenu() not implemented yet';
   }
   provideBill = () => {
      throw 'method provideBill() not implemented yet';
   }
   getPayment = () => {
      throw 'method getPayment() not implemented yet';
   }
   serveGuests = () => {
      throw 'method serveGuests() not implemented yet';
   }

   // FactoryMethod
   static createProduct(type, ...params) {
      let restaurant = null;

      if (type === 'chinese') restaurant = new ChineseRestaurant(...params);
      else if (type === 'japanese') restaurant = new JapaneseRestaurant(...params);
      else restaurant = new ItalianRestaurant(...params);

      return restaurant;
   }
}

class ChineseRestaurant extends AbstractRestaurant {
   constructor(seats) {
      super('chinese', seats);
   }

   getSeatOrder = (guestAmount, time) => console.log(`Got an order to the ${time} with ${guestAmount} guests`);
   isOrder = guestReq => !!guestReq;
   leadToTable = () => console.log('Lead guests to the table');
   findFreeSeats = () => console.log('Found free seats for the guests');
   giveMenu = amount => console.log(`Give ${amount} menu to the guests`);
   suggestSpecialChineseMenu = () => console.log('Suggested special Chinese menu');
   getOrderByMenu = () => console.log('Got an order to the meals');
   provideBill = sum => console.log(`Give a bill for the \$${sum}`);
   getPayment = () => console.log(`Got a payment by bill from guest`);

   serveGuests = () => {
      if (this.isOrder()){
         this.leadToTable()
      } else {
         this.findFreeSeats();
         this.leadToTable();
      }
      this.giveMenu();
      this.suggestSpecialChineseMenu();

      // complex logic for the serving guests...

      this.provideBill();
      this.getPayment()

      console.log('Said: Thank you for visiting us! It is always pleasure to see you! :)');
   }
}
class JapaneseRestaurant extends AbstractRestaurant {
   constructor(seats) {
      super('japanese', seats);
   }
   // complex logic for the serving guests with Japanese food
}
class ItalianRestaurant extends AbstractRestaurant {
   constructor(seats) {
      super('italian', seats);
   }
   // complex logic for the serving guests with Japanese food
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const restaurant = AbstractRestaurant.createProduct('chinese', 120);
restaurant.getSeatOrder(5, '4:15 PM')
