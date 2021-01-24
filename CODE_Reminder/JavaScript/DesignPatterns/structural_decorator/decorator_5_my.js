function hello() {
   return 'Hello dear friend';
}

function decoratedHello(name = '') {
   const helloRes = hello();
   const prepName = name ? `, ${name}` : '';
   return `${helloRes}${prepName}`;
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

console.log(hello());
console.log(decoratedHello('John'));
