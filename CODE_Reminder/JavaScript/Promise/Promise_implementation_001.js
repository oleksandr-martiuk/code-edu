// https://www.promisejs.org/implementing/

var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise(fn) {
   if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
   if (typeof fn !== 'function') throw new TypeError('fn must be a function');

   var state = PENDING; // store state which can be PENDING, FULFILLED or REJECTED
   var value = null;    // store value once FULFILLED or REJECTED
   var handlers = [];   // store success & failure handlers

   function resolve(result) {
      try {
         var then = getThen(result);
         if (then) {
            doResolve(then.bind(result), resolve, reject)
            return
         }
         state = FULFILLED;
         value = result;
         handlers.forEach(handle);
         handlers = null;
      } catch (e) {
         reject(e);
      }
   }

   function reject(error) {
      state = REJECTED;
      value = error;
      handlers.forEach(handle);
      handlers = null;
   }

   function handle(handler) {
      if (state === PENDING) {
         handlers.push(handler);
      } else {
         if (state === FULFILLED && typeof handler.onFulfilled === 'function') {
            handler.onFulfilled(value);
         }
         if (state === REJECTED && typeof handler.onRejected === 'function') {
            handler.onRejected(value);
         }
      }
   }

   this.done = function (onFulfilled, onRejected) {
      setTimeout(function () { // ensure we are always asynchronous
         handle({ onFulfilled, onRejected});
      }, 0);
   }

   doResolve(fn, resolve, reject);
}

/**
 * Check if a value is a Promise and, if it is,
 * return the `then` method of that promise.
 *
 * @param   { Promise|Any } value
 * @return  { Function|Null }
 */
function getThen(value) {
   let t = typeof value;
   if (value && (t === 'object' || t === 'function')) {
      let then = value.then;
      if (typeof then === 'function') {
         return then;
      }
   }
   return null;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 *
 * @param {Function} fn A resolver function that may not be trusted
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 */
function doResolve(fn, onFulfilled, onRejected) {
   let done = false;
   try {
      fn(function(value) {
         if (done) {
            return;
         }
         done = true;
         onFulfilled(value);
      }, function(reason) {
         done = true;
         onRejected(reason);
      })
   } catch (ex) {
      if (done) {
         return;
      }
      done = true;
      onRejected(ex);
   }
}

// // We can build this easily out of .done:
// this.then = function (onFulfilled, onRejected) {
//    var self = this;
//    return new Promise(function (resolve, reject) {
//       return self.done(function (result) {
//          if (typeof onFulfilled === 'function') {
//             try {
//                return resolve(onFulfilled(result));
//             } catch (ex) {
//                return reject(ex);
//             }
//          } else {
//             return resolve(result);
//          }
//       }, function (error) {
//          if (typeof onRejected === 'function') {
//             try {
//                return resolve(onRejected(error));
//             } catch (ex) {
//                return reject(ex);
//             }
//          } else {
//             return reject(error);
//          }
//       });
//    });
// }

function fetchSomething(){
   console.log('fetchSomething: start function');
   setTimeout(() => {
      console.log('inside of setTimeout');
      return { greeting: 'Hello dear friend!' };
   }, 1500);
   console.log('fetchSomething: end function');
}

const promise = new Promise(fetchSomething);

promise
   .then(result => {
      console.log('This is result from .then: ', result)
   })
   .catch(err => {
      console.log('This is Error from .catch: ', err)
   })
