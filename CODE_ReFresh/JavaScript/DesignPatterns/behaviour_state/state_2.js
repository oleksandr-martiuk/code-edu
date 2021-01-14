class MobileScreen {
   constructor() {
      this.powerOn = false;
      this.screenOn = false;
   }
   turnPowerOn() {
      this.powerOn = true;
   }
   notify(msg) {
      const notification = {
         powerOn: this.powerOn,
         screenOn: this.screenOn
      };
      console.log(`${msg}: ${notification}`);
   }
   touch() {
      if (!this.turnPowerOn) return;
      if (!this.screenOn) this.screenOn = true;
      this.notify('touch');
   }
   swipe() {
      if (!this.powerOn || !this.screenOn) return;
      this.notify('swipe');
   }
}

const mobile = new MobileScreen();

mobile.touch();
mobile.swipe(); // does not work
mobile.turnPowerOn();
mobile.touch();
mobile.swipe();
