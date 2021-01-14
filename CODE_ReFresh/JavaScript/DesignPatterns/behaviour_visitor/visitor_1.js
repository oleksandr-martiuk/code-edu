class Monkey {
   shout = () => console.log('Ooh oo aa aa!');
   accept = (operation) => operation.visitMonkey(this)
}

class Lion {
   roar = () => console.log('Roa-a-ar!')
   accept = (operation) => operation.visitLion(this)
}

class Dolphin {
   speak = () => console.log('Tu-ut tu-t-tu tu-tut!')
   accept = (operation) => operation.visitDolphin(this)
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Abstract Visitor
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
   visitMonkey = (monkey) => monkey.shout();
   visitLion = (lion) => lion.roar();
   visitDolphin = (dolphin) => dolphin.speak();
}

class JumpVisitor extends Visitor {
   visitMonkey = () => console.log(`Monkey jumped 20 feet high! on to the tree!`);
   visitLion = () => console.log(`Lion jumped 7 feet! Back on the ground!`);
   visitDolphin = () => console.log(`Dolphin walked on water a little and disappeared`);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const monkey = new Monkey();

const voice = new VoiceVisitor();
const jump = new JumpVisitor();

monkey.accept(voice);
monkey.accept(jump);
