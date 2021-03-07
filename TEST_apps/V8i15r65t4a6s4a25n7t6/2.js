const someInput = [
   '11',

   '1,2',
   '2,3',
   '1,4',
   '4,5',
   '4,6',
   '1,10',
   '10,11',
   '10,12',
   '1,7',
   '7,8',
   '7,9',

   '0.3',

   '0.2',
   '0.8',
   '0.28',
   '0.32',
   '0.17',
   '0.3',
   '0.2',
   '0.05',
   '0.4',
   '0.36',
   '0.1',

   '3',
   '3,2,1.1',
   '8,10,1.36',
   '3,11,1.8'
]

function getStore(arr) {
   let size = +arr[0] + 1;
   const store = {
      "1": { value: +arr[size] }
   };

   const keys = arr.slice(1, size);
   const values = arr.slice(size+1, 2*size);

   for (let i in keys) {
      const players = keys[i].split(',');
      store[players[1]] = { value: +values[i] };
      if (players[0] > 1) store[players[1]].parent = players[0]
   }

   return store
}

function getRequests(arr) {
   let startInx = (+arr[0]+1) * 2;
   const reqSize = arr[startInx];
   const requests = arr.slice(startInx);
   const result = [];

   for (let i = 1; i <= reqSize; i++) {
      const values = requests[i].slice(',')
      result.push(values);
   }

   return result;
}

function calc(store, initKey, parent = null) {
   let result = 0;
   let next = true;
   let key = initKey;
   let doneCalc = false;

   while(next) {
      result += store[key].value;
      key = store[key].parent;
      if (key === parent) {
         next = false;
         doneCalc = true;
         result += store[key].value;
      } else if (!key) {
         next = false;
      }
   }

   return { r: result, done: doneCalc };
}

function calcTotalLost(store, fKey, sKey) {
   const first = store['1'].value;
   let result = 0;

   const { r: second, done } = calc(store, fKey, sKey);
   if (done) {
      result += +(second).toFixed(2);
      return result;
   }

   const { r: third } = calc(store, sKey);

   result += +(first + second + third).toFixed(2);

   return result;
}

function getResult(input) {
   const inArr = [...input];
   const store = getStore(inArr);
   const requests = getRequests(inArr);

   console.log({ store, requests });

   for (let req of requests) {
      const props = req.split(',');
      let result = null;
      if (+props[0] > +props[1]) result = calcTotalLost(store, props[0], props[1]);
      else  result = calcTotalLost(store, props[1], props[0]);
      const logResult = result === +props[2] ? 'APPROVED' : 'REJECTED';
      console.log(logResult, `: ${result} === ${props[2]}`);
   }
}

getResult(someInput);
