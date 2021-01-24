class FlyWeight {
   constructor(name, params = []) {
      this.name = name;
      params.forEach(param => this[param] = param);
   }
   doIt = () => console.log(`Operation is done in scope of "${this.name}" flyweight`)
}

class FlyWeightFactory {
   constructor() {
      this.flyweights = {};
   }
   create = (name, params) => {
      name = name.toLowerCase();

      if (this.flyweights[name]) return this.flyweights[name];

      this.flyweights[name] = this.getFlyweight(name, params);
      return this.flyweights[name];
   }
   getFlyweight = (name, params) => new FlyWeight(name, params);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const factory = new FlyWeightFactory();

const yellowFlyWeight = factory.create('yellow', ['y', 'e', 'l', 'l', 'o', 'w', 123]);
const greenFlyWeight = factory.create('green', ['g', 'r', 'e', 'e', 'n', 456]);
const anotherYellowFlyWeight = factory.create('yellow', [555]);

yellowFlyWeight.doIt();
greenFlyWeight.doIt();
anotherYellowFlyWeight.doIt();
