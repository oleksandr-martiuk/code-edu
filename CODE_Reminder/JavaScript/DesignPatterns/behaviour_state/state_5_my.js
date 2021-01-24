class StatusInterface {
   constructor(name, nextState) {
      this.name = name;
      this.nextState = nextState;
   }
   getNext() {
      return new this.nextState();
   }
}

class Status1 extends StatusInterface {
   constructor() {
      super('first', Status2);
   }
}
class Status2 extends StatusInterface {
   constructor() {
      super('second', Status3);
   }
}
class Status3 extends StatusInterface {
   constructor() {
      super('third', Status1);
   }
}

class Context {
   constructor(status) {
      this.state = status;
   }
   setNext() {
      this.state = this.state.getNext();
   }
   getState() {
      console.log(this.state.name);
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const context = new Context(new Status3());

for (const index of new Array(6)) {
   context.getState();
   context.setNext();
}
