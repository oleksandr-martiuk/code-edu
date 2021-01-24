const publisherSubscriber = {};

// we send in a container object which will handle the subscriptions and publishings
(function(container) {
   // the id represents a unique subscription id to a topic
   let id = 0;

   // we subscribe to a specific topic by sending in a callback function to be executed on event firing
   container.subscribe = (topic, f) => {
      if (!container[topic]) container[topic] = [];
      container[topic].push({ id: ++id, cb: f });
      return id;
   }

   // each subscription has its own unique ID, which we use to remove a subscriber from a certain topic
   container.unsubscribe = (topic, id) => {
      container[topic] = container[topic].filter(subscriber => subscriber.id !== id);
   }

   container.publish = (topic, data) => {
      // when executing a callback, it is usually helpful to read the documentation to know which arguments will be
      // passed to our callbacks by the object firing the event
      container[topic].forEach(subscriber => subscriber.cb(data));
   }

   return container;
})(publisherSubscriber);

const subscriptionID1 = publisherSubscriber.subscribe("mouseClicked", function(data) {
   console.log("I am Bob's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

const subscriptionID2 = publisherSubscriber.subscribe("mouseHovered", function(data) {
   console.log("I am Bob's callback function for a hovered mouse event and this is my event data: " + JSON.stringify(data));
});

const subscriptionID3 = publisherSubscriber.subscribe("mouseClicked", function(data) {
   console.log("I am Alice's callback function for a mouse clicked event and this is my event data: " + JSON.stringify(data));
});

// NOTE: after publishing an event with its data, all of the subscribed callbacks will execute and will receive
// a data object from the object firing the event there are 3 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});

// we unsubscribe from an event by removing the subscription ID
publisherSubscriber.unsubscribe("mouseClicked", subscriptionID3);

// there are 2 console.logs executed
publisherSubscriber.publish("mouseClicked", {"data": "data1"});
publisherSubscriber.publish("mouseHovered", {"data": "data2"});
