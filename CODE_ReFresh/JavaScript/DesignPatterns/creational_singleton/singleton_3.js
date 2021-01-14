class Hero {
   constructor(name) {
      if (!Hero.instance) {
         this._name = name;
         Hero.instance = this;
      }
      return Hero.instance;
   }
   getName = () => this._name;
   setName = (name) => (this._name = name);
}

const superMan = new Hero('Clark Kent');
console.log(superMan.getName());

const newHero = new Hero('Elizabet Yo');
console.log(newHero.getName()); // it is still 'Clark Kent'

superMan.setName('Lee Foo') // just update name for 'superMan'
console.log(superMan.getName());
console.log(newHero.getName());
