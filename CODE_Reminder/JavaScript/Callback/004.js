function kievCall(arg) {
   console.log("Start 'Kiev'"); // 2.2
   setTimeout(function () {
      console.log("Timeout 'Kiev'", arg); // 2.5
      return arg;
   }, 1000);
   console.log("End 'Kiev'"); // 2.3
}

function newYorkCall(cb) {
   console.log("Start 'NewYork'"); // 1.1
   setTimeout(function () {
      console.log("Timeout 'NewYork'"); // 2.1
      var result = cb('Kiev');
      console.log("Timeout 'NewYork' ---> result: ", result); // 2.4
      return result;
   }, 1000);
   console.log("End 'NewYork'"); // 1.2
}

var result = newYorkCall(kievCall);
console.log('FINAL RESULT: ', result); // 1.3
