class Delivery {
   constructor(type, weight) {
      this.transportType = type;
      this.maxWeight = weight;
      this.nextTransport = null;
   }
   setNextTransport(transport) {
      if (!this.nextTransport) {
         this.nextTransport = transport;
      }
   }
   deliver(weight) {
      if (this.maxWeight >= weight) {
         console.log(`Delivery in "${weight} ton" is possible to deliver by "${this.transportType}"`);
      }
      else if (this.nextTransport) {
         this.nextTransport.deliver(weight);
      }
      else {
         console.log(`Delivery in ${weight} ton is NOT possible to deliver by single transport`);
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Truck extends Delivery {
   constructor(weight = 20) {
      super('Truck', weight);
   }
}

class Train extends Delivery {
   constructor(weight = 1000) {
      super('Train', weight);
   }
}

class Ship extends Delivery {
   constructor(weight = 5000) {
      super('Ship', weight);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const truck = new Truck(40);
const train = new Train(500);
const ship = new Ship(2000);

truck.setNextTransport(train);
train.setNextTransport(ship);

truck.deliver(450);
