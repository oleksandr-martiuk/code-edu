// Flyweight используется для экономии памяти, занимаемой объектами

// объект, где определяется модель
class Auto {
   constructor(model) {
      this.model = model;
   }
}

// главная реализация происходит в фабрике
class AutoFactory {
   constructor() {
      this.models = {};
   }
   create(name) {
      const model = this.models[name];
      if(model) return model;
      console.count('model'); // счетчик вызовов
      this.models[name] = new Auto(model);
      return this.models[name];
   }
   getModels() {
      console.table(this.models);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());
