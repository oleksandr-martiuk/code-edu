const invoker = {
   add: (x, y) => x + y,
   subtract: (x, y) => x - y
}

const manager = {
   execute: function (name) {
      const args = [].slice.call(arguments, 1);
      return (name in invoker) ? invoker[name].apply(null, args) : false;
   }
}

console.log(manager.execute('add', 3, 5));
console.log(manager.execute('subtract', 5, 3));
