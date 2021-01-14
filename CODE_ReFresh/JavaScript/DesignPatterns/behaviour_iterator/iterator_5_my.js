class Iterator {
   constructor(elements) {
      this.index = 0;
      this.elements = this.getIterableCollection(elements);
   }
   getIterableCollection(elements) {
      if (Array.isArray(elements)) {
         return elements;
      }
      else if (typeof elements === 'object' && elements !== null) {
         return Object.keys(elements).map(key => elements[key]);
      }
      else {
         throw new Error(`Elements is not of type 'Array' or 'Object'`);
      }
   }
   current() {
      return this.elements[this.index];
   }
   next() {
      if (this.hasNext()) ++this.index;
      return this.elements[this.index];
   }
   hasNext() {
      return (this.index + 1) < this.elements.length;
   }
   prev() {
      if (this.hasPrev()) --this.index;
      return this.elements[this.index];
   }
   hasPrev() {
      return (this.index - 1) >= 0;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const collection = new Iterator(['Tim', 'Bob', 'Jim', 'Sara']);
console.log('Current: ', collection.current());
console.log('Next: ', collection.next());
console.log('Next: ', collection.next());
console.log('Next: ', collection.next());
console.log('Next: ', collection.next());
console.log('Current: ', collection.current());
console.log('Prev: ', collection.prev());
console.log('Prev: ', collection.prev());
console.log('Next: ', collection.next());
console.log('Prev: ', collection.prev());
console.log('Prev: ', collection.prev());
console.log('Prev: ', collection.prev());
console.log('Current: ', collection.current());
