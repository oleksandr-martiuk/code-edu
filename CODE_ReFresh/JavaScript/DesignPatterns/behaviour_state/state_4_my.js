class State {
   constructor(states) {
      this.states = [...states];
      this.index = 0;
      this.currState = this.states[this.index];
   }
   current () {
      return this.currState;
   }
   next () {
      if (this.states.length && this.index + 1 !== this.states.length) {
         this.currState = this.states[++this.index];
      }
      return this.currState;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Parcel {
   constructor() {
      this.deliveryStatus = new State(['preparing for shipment', 'on the way', 'on delivery', 'delivered']);
      this.parcelNumber = this.getRandomNumber();
   }
   getRandomNumber() {
      let num = '';
      for (let i of new Array(5)) {
         num += Math.floor(Math.random() * 9) + 1;
      }
      return num;
   }
   moveToNext () {
      return this.deliveryStatus.next();
   }
   whereParcel () {
      console.log('Parcel is', this.deliveryStatus.current());
   }
   getParcelNum() {
      console.log('PARCEL number: ', this.parcelNumber);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const myParcel = new Parcel();

myParcel.whereParcel();
myParcel.moveToNext();
myParcel.whereParcel();
myParcel.getParcelNum();
myParcel.moveToNext();
myParcel.moveToNext();
myParcel.whereParcel();
myParcel.getParcelNum();
myParcel.moveToNext();
myParcel.whereParcel();
