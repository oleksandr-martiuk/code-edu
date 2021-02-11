let value = '2';

function showValue() {
   console.log("Value from showValue: " + value); // 2
}

function wrapper() {
   let value = 3;
   console.log("Value from wrapper: " + value); // 3

   showValue();
}

wrapper();

// Value from wrapper: 3
// Value from showValue: 2
