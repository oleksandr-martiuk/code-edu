// through the use of a closure we expose an object as a public API which manages the private objects array
const collection = (function() {
   // private members
   const objects = [];

   // public members
   return {
      add: object => objects.push(object),
      removeOne: (object) => {
         const index = objects.indexOf(object);
         if (index >= 0) {
            objects.splice(index, 1);
         }
      },
      getAll: () => objects
   }
})();

collection.add("Bob");
collection.add("Alice");
collection.add("Frank");

console.log(collection.getAll());

collection.removeOne("Alice");

console.log(collection.getAll());
