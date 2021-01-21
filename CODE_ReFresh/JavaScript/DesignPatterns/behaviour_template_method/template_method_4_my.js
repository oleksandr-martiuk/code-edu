class AbstractClassWithTemplateMethod {
   constructor(name) {
      this.name = name;
   }
   // TODO: 'templateMethod' must be protected (can't be overridden by any of SubClasses)
   templateMethod() {
      this.step1();
      this.step2();
      this.step4();
      this.step6();
      console.log('-----------------------------------------------');
   }
   step1 = () => console.log(`MAIN (${this.name}): Step #1 is done`);
   step2 = () => console.log(`MAIN (${this.name}): Step #2 is done`);
   step3 = () => {}; // abstract method
   step4 = () => console.log(`MAIN (${this.name}): Step #4 is done`);
   step5 = () => {}; // abstract method
   step6 = () => console.log(`MAIN (${this.name}): Step #6 is done`);
}

//----------------------------------------------------

class ConcreteClass1 extends AbstractClassWithTemplateMethod {
   constructor() {
      super('class #1');
   }
   step1 = () => console.log(`[Step #1 is overridden] ${this.name}: hello dear friend! :)`);
   step6 = () => console.log(`[Step #6 is overridden] ${this.name}: My Congratulations!`);
}

class ConcreteClass2 extends AbstractClassWithTemplateMethod {
   constructor() {
      super('class #2');
   }
   step2 = () => console.log(`[Step #2 is overridden] ${this.name}: Are you ready to go?`);
   step3 = () => console.log(`[Step #3 is overridden] ${this.name}: Hello everyone!`);
   step4 = () => console.log(`[Step #4 is overridden] ${this.name}: see you next time`);
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ **/

const class1 = new ConcreteClass1();
const class2 = new ConcreteClass2();

class1.templateMethod();
class2.templateMethod();
