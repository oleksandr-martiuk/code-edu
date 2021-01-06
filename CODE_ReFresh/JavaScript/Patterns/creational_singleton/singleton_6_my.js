class Singleton {
   constructor() {
      this.instance = null;
   }
   static getInstance() {
      throw 'method getInstance() not implemented yet';
   }
}

class CacheSingleton extends Singleton {
   constructor(name) {
      super();
      this.name = name;
      this.storage = {};
   }
   static getInstance(...params) {
      if (!this.instance) this.instance = new CacheSingleton(...params);
      return this.instance;
   }
   write = (key, value) => (this.storage[key] = value);
   read = key => this.storage[key];
   delete = key => delete this.storage[key];
}

const cache1 = CacheSingleton.getInstance('1-st storage');
const cache2 = CacheSingleton.getInstance('2-nd storage');

cache1.write('first', 88);
cache1.write('second', 'Hello');
cache1.write('third', 3);
cache2.write('Jim', { name: 'Jim', city: 'Washington' });
cache2.write('second', 'Hello dear friend');
cache2.delete('third');
cache2.read('first');

console.log(cache1); // 1-st storage
console.log(cache2); // 1-st storage
