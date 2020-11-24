class Burger {
   constructor(builder) {
      this.size = builder.size || 0;
      if (this.size) {
         this.cheese = builder.cheese || 0;
         this.pepperoni = builder.pepperoni || 0;
         this.lettuce = builder.lettuce || 0;
         this.tomato = builder.tomato || 0;
      }
   }
}

// TODO: building 'BUILDER'
class BurgerBuilder {
   constructor(size) {
      this.size = size;
   }

   static addOne(prodType, context) {
      context[prodType] = context[prodType] ? ++context[prodType] : 1;
      return context;
   }

   addPepperoni() {
      return BurgerBuilder.addOne('pepperoni', this);
   }

   addLettuce() {
      return BurgerBuilder.addOne('lettuce', this);
   }

   addCheese() {
      return BurgerBuilder.addOne('cheese', this);
   }

   addTomato() {
      return BurgerBuilder.addOne('tomato', this);
   }

   build() {
      return new Burger(this);
   }
}
//----------------------------------------------------------------------------------------------------------------------
// TODO: how to use?

const myBurger = new BurgerBuilder(44);
// const myBurger = new BurgerBuilder(0); // Burger { size: 0 }

myBurger
   .addPepperoni()
   .addTomato()
   .addTomato()
   .addCheese();

const readyBurger = myBurger.build();
console.log(readyBurger); // Burger { size: 44, cheese: 1, pepperoni: 1, lettuce: 0, tomato: 2 }
