// Interface 'Visitor'
class Visitor {
   visitPC = () => {
      throw new Error('method visitPC() is not implemented yet');
   }
   visitPocketPC = () => {
      throw new Error('method visitPocketPC() is not implemented yet');
   }
   visitSmartPhone = () => {
      throw new Error('method visitSmartPhone is not implemented yet');
   }
}

//-------------------------------------------------------------------------------

// List of visitors
class TurnOnVisitor extends Visitor {
   visitPC = () => console.log('PC is turned on');
   visitPocketPC = () => console.log('PocketPC is too old for turning it on :/');
   visitSmartPhone = () =>  console.log('StartPhone is already turned on');
}
class UseVisitor extends Visitor {
   visitPC = () => console.log('Yo! I like such PersonalComputer');
   visitPocketPC = () => console.log('It is not possible to use such PocketPC');
   visitSmartPhone = () =>  console.log('StartPhone is used well');
}

//-------------------------------------------------------------------------------

class PC {
   accept = visitor => visitor.visitPC();
   upgrade = details => console.log(`I added several new details to such PC (${JSON.stringify(details)})`);
}
class PocketPC {
   accept = visitor => visitor.visitPocketPC();
   throwAway = () => console.log(`Finally we throw such PocketPC away`);
}
class SmartPhone {
   accept = visitor => visitor.visitSmartPhone();
   repair = () => console.log('SmartPhone is repaired');
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ **/

const pc = new PC();
const pocketPC = new PocketPC();
const smartPhone = new SmartPhone();

const useVisitor = new UseVisitor();
const turnOnVisitor = new TurnOnVisitor();

//----------------------------------------

pc.accept(turnOnVisitor);
pocketPC.accept(turnOnVisitor);
smartPhone.accept(useVisitor);
