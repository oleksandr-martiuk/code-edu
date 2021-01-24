class Iterator {
   constructor(data) {
      this.setData(data);
      this.index = 0;
   }

   first = () => this.data[0];
   next = () => this.hasNext() ? this.data[++this.index] : 'Reached the END of the collection';
   hasNext = () => (this.index + 1) < this.data.length;
   prev = () => this.hasPrev() ? this.data[--this.index] : 'Reached the START of the collection';
   hasPrev = () => (this.index - 1) >= 0;
   current = () => this.data[this.index];
   reset = () => {
      this.index = 0
   };

   setData(data) {
      if (typeof data === 'string') this.data = data.split('');
      if (typeof data === 'number' || typeof data === 'boolean') this.data = [data];
      if (typeof data === 'object') {
         if (Array.isArray(data)) this.data = data;
         else if (data === null) this.data = [data];
         else Object.keys(data).forEach(key => this.data[key] = data[key]);
      }
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const iterator = new Iterator([ 'hello', 1, 3, {name: 'Joe'}, 'New York', 88 ]);

console.log(iterator.prev());
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.first());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.current());
console.log(iterator.prev());
console.log(iterator.prev());
console.log(iterator.prev());
console.log(iterator.prev());
console.log(iterator.prev());
console.log(iterator.prev());
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
iterator.reset();
console.log(iterator.current());
