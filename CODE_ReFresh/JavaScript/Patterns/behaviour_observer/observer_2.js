class EventObserver {
   constructor() {
      this.observers = [];
   }
   subscribe(fn) {
      this.observers.push(fn);
   }
   unsubscribe(fn) {
      this.observers = this.observers.filter(subscriber => subscriber !== fn);
   }
   broadcast(data) {
      this.observers.forEach(subscriber => subscriber(data));
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const blogObserver = new EventObserver();

blogObserver.subscribe(data => {
   console.log('Subscription for the channel #1 was fired', data);
})

blogObserver.subscribe(data => {
   console.log('Subscription for the channel #35 was fired', data);
})

blogObserver.broadcast({ someData: 'hello' });
