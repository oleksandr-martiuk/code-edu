const fib = function (n) {
   if (n < 2) return n;
   return fib(n - 1) + fib(n - 2);
};

const Obj = function() { };

Obj.prototype.doSomething = function(arg1_) {
   const callback_ = arguments[arguments.length - 1];
   const callback = (typeof (callback_) == 'function') ? callback_ : null;

   const arg1 = (typeof arg1_ === 'number') ? arg1_ : null;
   if (!arg1) return callback(new Error('first arg missing or not a number'));

   process.nextTick(function() {
      // Блокирующая операция
      const data = fib(arg1);
      callback(null, data);
   });
}

const test = new Obj();

const number = 10;

test.doSomething(number, function(err,value) {
   if (err)
      console.error(err);
   else
      console.log('Fibonacci value for %d is %d', number, value);
});

console.log('called doSomething');
