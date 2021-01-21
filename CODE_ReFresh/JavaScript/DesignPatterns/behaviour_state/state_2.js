class MobileScreen {
   constructor() {
      this.powerOn = false;
      this.screenOn = false;
   }
   turnPowerOn() {
      this.powerOn = true;
      this.notify('turnPowerOn: ');
   }
   touch() {
      if (!this.powerOn) {
         this.notify(`touch (doesn't have power): `);
         return;
      }
      if (!this.screenOn) this.screenOn = true;
      this.notify('touch');
   }
   swipe() {
      if (!this.powerOn || !this.screenOn) {
         this.notify(`swipe (doesn't not work): `);
         return;
      }
      this.notify(`swipe (works): `);
   }
   notify(msg) {
      const notification = {
         power: this.powerOn,
         screen: this.screenOn
      };
      console.log(`${msg}: `, notification);
   }
}

const mobile = new MobileScreen();

mobile.touch();
mobile.swipe(); // does not work
mobile.turnPowerOn();
mobile.touch();
mobile.swipe();
