class Monkey {
   shout(){
      console.log('Ooh oo aa aa!');
   }
   accept(operation) {
      operation.visitMonkey(this)
   }
}

class Lion {
   roar() {
      console.log('Roaaar!')
   }
   accept(operation) {
      operation.visitLion(this)
   }
}

class Dolphin {
   speak() {
      console.log('Tuut tuttu tuutt!')
   }
   accept(operation) {
      operation.visitDolphin(this)
   }
}


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// Visitor

class Visitor {
   visitMonkey(monkey) {
      throw new Error(`В ${this.constructor.name} не описан метод visitMonkey()`)
   }
   visitLion(lion) {
      throw new Error(`В ${this.constructor.name} не описан метод visitLion()`);
   }
   visitDolphin(dolphin) {
      throw new Error(`В ${this.constructor.name} не описан метод visitDolphin()`);
   }
}

class VoiceVisitor extends Visitor {
   visitMonkey(monkey){
      monkey.shout();
   }
   visitLion(lion){
      lion.roar();
   }
   visitDolphin(dolphin){
      dolphin.speak();
   }
}

class JumpVisitor extends Visitor {
   visitMonkey(monkey) {
      console.log(`${monkey.constructor.name} jumped 20 feet high! on to the tree!`);
   }
   visitLion(lion) {
      console.log(`${monkey.constructor.name} jumped 7 feet! Back on the ground!`);
   }
   visitDolphin(dolphin) {
      console.log(`${monkey.constructor.name} walked on water a little and disappeared`);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// TODO: how to use?

const monkey = new Monkey();

const voice = new VoiceVisitor();
const jump = new JumpVisitor();

monkey.accept(voice);
monkey.accept(jump);

// Fake class
