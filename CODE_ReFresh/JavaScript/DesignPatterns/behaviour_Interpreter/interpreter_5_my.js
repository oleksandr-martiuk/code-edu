class Context {
   constructor(input) {
      this.input = input;
      this.output = '';
   }
   getOutput = () => console.log(this.output);
}
class AbstractExpression {
   interpret() {
      throw new Error('method interpret() not implemented yet');
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class IndexExpression extends AbstractExpression {
   constructor() {
      super();
   }
   interpret = ctx =>
      ctx.output =
         ctx.input.toString()
            .split('-')
            .map((char, index) => index)
            .join('-');
}
class AlphabetExpression extends AbstractExpression {
   constructor() {
      super();
      this.abc = this.getAlphabetObj();
   }
   interpret(ctx) {
      ctx.output =
         ctx.input.toString()
         .toLowerCase()
         .split('')
         .map(char => this.abc[char])
         .join('-');
   }
   getAlphabetObj() {
      const result = {};
      'abcdefghijklmnopqrstuvwxyz 1234567890'.split('').forEach((char, index) => result[char] = index);
      return result;
   }
}

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const ctx1 = new Context('Hi dear zzzzorax123');
const ctx2 = new Context('7-8-26-3-4-0-17-26-25-25-25-25-14-17-0-23-27-28-29');

const indexExpression = new IndexExpression();
const alphabetExpression = new AlphabetExpression();

alphabetExpression.interpret(ctx1);
ctx1.getOutput();
indexExpression.interpret(ctx2);
ctx2.getOutput();
