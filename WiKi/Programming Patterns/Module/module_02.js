const calculator = (function() {
  // Приватная область видимости
  let result = { prev: 0, cur: 0 };

  const calc = (operation, num, count) => {
    result.prev = result.cur
    result.cur = count(num, result.cur);

    console.log(`Result: ${result.prev}${operation}${num} = ${result.cur}`)
  }
  const reset = () => {
    result.prev = 0;
    result.cur = 0;
    console.log(`Result has been reset!`);
  }

  const sum = (num) => calc('+', num, (a, res) => (res + a) );
  const diff = (num) => calc('-', num, (a, res) => (res - a) );
  const multi = (num) => calc('*', num, (a, res) => (res * a) );
  const div = (num) => calc('/', num, (a, res) => (res / a) );

  return { sum, diff, multi, div, reset }
})();

const c = calculator;

c.sum(5);
c.multi(10);
c.div(2);
c.reset();
c.diff(13);
