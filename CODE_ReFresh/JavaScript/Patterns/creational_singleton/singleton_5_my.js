class Singleton {
   constructor(params = {}) {
      this.instance = null;
      if (params) this.defineParams(params);
   }
   defineParams(params) {
      Object.keys(params).forEach(name => {
         const value = params[name];
         this[name] = value;
      })
   }
   getInstance(params) {
      if (!this.instance) {
         this.instance = new Singleton(params);
      }
      return this.instance;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const single = new Singleton();

const man = single.getInstance({ name: 'Yoko', age: 88, city: 'Fen-shu' });
const women = single.getInstance({ name: 'LeeLu', age: 74, city: 'Shtraverswill' });

console.log(man);
console.log(women); // getting previous instance of Singleton
