class Click {
   constructor() {
      this.handlers = [];  // observers
   }
   subscribe(fn) {
      this.handlers.push(fn);
   }
   unsubscribe(fn) {
      this.handlers = this.handlers.filter(item => (item !== fn) ? item : null);
   }
   fire(o, thisObj) {
      const scope = thisObj || { name: 'default object' };
      this.handlers.forEach(item => item.call(scope, o));
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const click = new Click();

const clickHandler = (item) => console.log("fired: " + item);

click.subscribe(clickHandler);
click.fire('event #1');

click.unsubscribe(clickHandler);
click.fire('event #2');

click.subscribe(clickHandler);
click.fire('event #3');
