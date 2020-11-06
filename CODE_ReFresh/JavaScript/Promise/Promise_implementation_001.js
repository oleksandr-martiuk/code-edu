// https://www.promisejs.org/implementing/

let PENDING = 0;
let FULFILLED = 1;
let REJECTED = 2;

function Promise() {
   let state = PENDING; // store "state" which can be PENDING, FULFILLED and REJECTED
   let value = null;    // store "value" or "error" once FULFILLED or REJECTED
   let handlers = [];   // store 'success' & 'failed' attached by calling .then or .done

   function fulfill(result) {
      state = FULFILLED;
      value = result;
   }

   function reject(error) {
      state = FULFILLED;
      value = error;
   }
}

