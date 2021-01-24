class Iterator {
   constructor(items) {
      this.index = 0;
      this.items = items;
   }
   first() {
      this.reset();
      return this.next();
   }
   next() {
      return this.items[this.index++];
   }
   hasNext() {
      return this.index <= this.items.length;
   }
   reset() {
      this.index = 0;
   }
   each(cb) {
      for (let item = this.first(); this.hasNext(); item = this.next()) {
         cb(item);
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const items = ['one', 2, 'circle', true, 'Apple'];
const iterator = new Iterator(items);

iterator.each(item => console.log(item));
