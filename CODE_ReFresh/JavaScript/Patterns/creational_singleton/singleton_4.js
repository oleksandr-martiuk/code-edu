class Singleton {
   constructor(name) {
      this.instance = null;
      this.name = name;
   }
   createInstance(name) {
      return new Singleton(name);
   }
   getInstance(name) {
      if (!this.instance) {
         this.instance = this.createInstance(name);
      }
      return this.instance;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const singleton = new Singleton();

const instance01 = singleton.getInstance('1-st instance');
const instance02 = singleton.getInstance('2-nd instance');

console.log(instance01.name);
console.log(instance02.name);
