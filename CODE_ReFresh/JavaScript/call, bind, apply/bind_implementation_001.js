Function.prototype.myBind = function (context, ...args) {
   const key = Symbol();
   context[key] = this;

   return function(...fArgs) {
      const allArgs = [...args, ...fArgs]
      setTimeout(() => (delete context[key]), 100);
      return context[key](...allArgs);
   }
}

function greet(company, message) {
   console.log(`${this.name} our organization "${company}" is happy to congratulate you! ${message}`);
}

const myGreeting = greet.myBind({name: 'Tom'}, 'Coca-cola');

myGreeting('You are welcome!');
