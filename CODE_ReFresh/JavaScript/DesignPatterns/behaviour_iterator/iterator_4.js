class Iterator {
   constructor(elements) {
      this.index = 0;
      this.elements = elements;
   }
   next() {
      return this.elements[this.index++];
   }
   hasNext() {
      return this.index < this.elements.length;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const collection = new Iterator(['Audio', 'BMW', 'Tesla', 'Mercedes']);

while(collection.hasNext()) {
   console.log(collection.next());
}
