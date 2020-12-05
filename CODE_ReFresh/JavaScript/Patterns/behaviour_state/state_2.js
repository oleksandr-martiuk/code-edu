class MobileScreen {
   constructor() {
      // В самом начале телефон выключен
      this.powerOn = false;
      this.screenOn = false;
   }

   // Включение питания
   turnPowerOn() {
      this.powerOn = true;
   }

   notify(msg) {
      console.log(`${msg}: `, JSON.stringify({ powerOn: this.powerOn, screenOn: this.screenOn }));
   }

   // Прикосновение
   touch() {
      // Если питание выключено, то ничего не происходит
      if (!this.turnPowerOn) {
         return;
      }

      // Если экран был выключен, то его надо включить
      if (!this.screenOn) {
         this.screenOn = true;
      }

      // На событие должно реагировать текущее активное приложение
      this.notify('touch');
   }

   // Смахивание
   swipe() {
      // Если выключено питание или экран, то ничего не происходит
      if (!this.powerOn || !this.screenOn) {
         return;
      }

      // На событие должно реагировать текущее активное приложение
      this.notify('swipe');
   }
}

const mobile = new MobileScreen();

mobile.touch();
mobile.swipe(); // does not work
mobile.turnPowerOn();
mobile.touch();
mobile.swipe();
