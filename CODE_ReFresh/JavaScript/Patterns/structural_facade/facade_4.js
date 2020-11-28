/**
 * ПАТТЕРН ФАСАД
 *
 *    Предоставляет унифицированный интерфейс к группе интерфейсов подсистемы.
 *    Фасад определяет высокоуровневый интерфейс, упрощающий работу с подсистемой.
 *
 *    Превращает сложный интерфейс с множеством методов в простой интерфейс с минимум методов.
 *
 *    В данном случае интерфейс фасада компьюетра будет иметь всего 2 метода - вкл/выкл,
 *    при том что под капотом выполняется 12 методов.
 *
 *    Таким образом отделяется код клиента от кода реализации.
 */

class Computer {
   getElectricShock = () => console.log('Ouch!');
   makeSound = () => console.log('Beep beep!');
   showLoadingScreen = () => console.log('Loading..');
   bam = () => console.log(`Ready to be used!\n------------------------------------`);
   closeEverything = () => console.log('Bup bup bup buzzzz!');
   sooth = () => console.log('Zzzzz');
   pullCurrent = () => console.log('Haaah!');
}

class Mouse {
   launchIRLight = () => console.log('IR мышки горит');
   launchBackLight = () => console.log('Декоративная подсветка мышки включена');
   noPower = () => console.log('Мышка обесточена');
}

class Keyboard {
   launchBackLight = () => console.log('Подсветка кнопок клавиатуры включена');
   noPower = () => console.log('Клавиатура обесточена');
}

class ComputerFacade {
   constructor(computer, mouse, keyboard) {
      this.computer = computer
      this.mouse = mouse
      this.keyboard = keyboard
   }

   turnOn() {
      this.computer.getElectricShock()
      this.computer.makeSound()
      this.computer.showLoadingScreen()
      this.mouse.launchIRLight()
      this.mouse.launchBackLight()
      this.keyboard.launchBackLight()
      this.computer.bam()
   }

   turnOff() {
      console.log('Выключение компьютера запущено');
      this.computer.closeEverything()
      this.computer.pullCurrent()
      this.computer.sooth()
      this.mouse.noPower()
      this.keyboard.noPower()
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// TODO: how to use?

const computer = new ComputerFacade(new Computer(), new Mouse(), new Keyboard());
computer.turnOn();
computer.turnOff();
