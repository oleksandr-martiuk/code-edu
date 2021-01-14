class Parking {
   constructor(name, maxPlaces) {
      this.name = name;
      this.maxPlaces = maxPlaces;
      this.cars = [];
   }
   registerCar(car) {
      if (this.isFree()) {
         this.cars.push(car);
         console.log(`"${car.name}" is REGISTERED on the "${this.name}": please coming...`);
         return true;
      } else {
         console.log(`Sorry ${car.name}! Parking "${this.name}" is full (${this.maxPlaces})`);
         return false;
      }
   }
   pay(car) {
      this.cars = this.cars.filter(item => item.name !== car.name);
      console.log(`MESSAGE: ${car.name} we got your payment. See you next time`);
   }
   isFree() {
      return Object.keys(this.cars).length < this.maxPlaces;
   }
}

class Car {
   constructor(brand, regPlates) {
      this.name = this.getName(brand, regPlates);
      this.parkStatus = false;
   }
   getName(brand, regPlates) {
      return `${brand}::${regPlates}`;
   }
   parkOn(parking) {
      if (!parking) {
         console.log(`Dear ${this.name}, where do you want to park your car?`)
         return;
      }
      if (this.parkStatus) {
         const parkingMsg = (this.parking.name === parking.name)
            ? `here (${this.parking.name})`
            : `on the "${this.parking.name}"`
         console.log(`You (${this.name}) already parked ${parkingMsg}`);
         return;
      }

      if (parking.registerCar(this)) {
         this.parking = parking;
         this.parkStatus = true;
      }
   }
   parkOff() {
      this.parkStatus = false;
      this.parking.pay(this);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const cityParking = new Parking('GreatCity', 5);
const countryParking = new Parking('CountryValley', 3);

const vladAudi = new Car('Audi', 'TY7484LK');
const timBMW = new Car('BMW', '32153YT');
const jimVolvo = new Car('Volvo', 'EU8998LK');
const yoshiNissan = new Car('Nissan', 'SD7544HJ');
const jimDacha = new Car('Dacha', 'UY56432BV');
const sonyLada = new Car( 'Lada', 'UY56432BV');

vladAudi.parkOn(countryParking);
timBMW.parkOn(countryParking);
jimVolvo.parkOn(countryParking);
yoshiNissan.parkOn(countryParking);
sonyLada.parkOn(countryParking);
timBMW.parkOn(countryParking);
timBMW.parkOn(cityParking);
timBMW.parkOn();
timBMW.parkOff();
sonyLada.parkOn(countryParking);
timBMW.parkOn(cityParking);
jimDacha.parkOn(cityParking);
