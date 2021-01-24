class OrderStatus {
   constructor(name, nextStatus) {
      this.name = name;
      this.nextStatus = nextStatus;
   }
   next() {
      console.log(this.nextStatus)
      return new this.nextStatus;
   }
}

//-----------------------------------------------

class Payment extends OrderStatus {
   constructor() {
      super('waitingForPayment', Shipping);
   }
}

class Shipping extends OrderStatus {
   constructor() {
      super('shipping', Delivered);
   }
}

class Delivered extends OrderStatus {
   constructor() {
      super('delivered', Delivered);
   }
}

//-----------------------------------------------

class Order {
   constructor() {
      this.state = new Payment();
   }
   nextState() {
      this.state = this.state.next();
   }
   cancelOrder() {
      this.state.name === 'waitingForPayment' ? console.log('Order is canceled') : console.log(`Order can't be canceled`);
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const myOrder = new Order();

myOrder.state.next();
myOrder.cancelOrder();
myOrder.nextState();
console.log(myOrder.state.name);
myOrder.cancelOrder();
