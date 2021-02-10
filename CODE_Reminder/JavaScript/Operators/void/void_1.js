void function test() {
   console.log('boo!'); // boo!
}();

try {
   test();
} catch (e) {
   console.log(e); // ReferenceError: test is not defined
}
