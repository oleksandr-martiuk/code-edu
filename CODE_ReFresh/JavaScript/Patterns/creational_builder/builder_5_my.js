// TODO #1: creating ConcreteProduct 'Bench'
class Bench {
   constructor() {
      this.type = 'bench';
   }
}

// TODO #2: creating 'AbstractBuilder'
class AbstractBuilder {
   buildPart() {
      throw 'method buildPart() is not defined yet';
   }
   getProduct() {
      throw 'method getProduct() is not defined yet';
   }
}

// TODO #3: creating ConcreteBuilder 'BenchBuilder'
class BenchBuilder extends AbstractBuilder {
   constructor() {
      super();
      this.bench = new Bench();
   }
   buildPart = (key, value) => {
      this.bench[key] = value;
      return this;
   }

   setMaterial = value => this.buildPart('material', value)
   setLegs = value => this.buildPart('legs', value)
   setWidth = value => this.buildPart('width', value)
   setHeight = value => this.buildPart('height', value)
   setConnectors = value => this.buildPart('connector', value)
   setDecor = value => this.buildPart('decor', value)
   setLocation = value => this.buildPart('location', value)

   getProduct = () => this.bench
}

// TODO #3: creating ConcreteDirector 'PlasticBenchDirector'
class PlasticBenchDirector {
   constructor(builder) {
      this.builder = builder;
   }
   construct() {
      this.builder
         .setMaterial('plastic')
         .setWidth('6m')
         .setHeight('1m')
         .setLegs(8)
         .setConnectors({ type: 'screws', material: 'wood', amount: 48 })
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const benchBuilder = new BenchBuilder();
const benchDirector = new PlasticBenchDirector(benchBuilder);
benchDirector.construct();

console.log(benchBuilder.getProduct());
