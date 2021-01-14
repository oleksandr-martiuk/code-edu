class Context {
   constructor(input) {
      this.input = input.toString();
      this.output = [];
   }
   removeFirstInput(){
      this.input = this.input.substring(1);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class AbstractExpression {
   constructor() {}
   interpret() {};
}

class Expression extends AbstractExpression {
   constructor(chars, value) {
      super();
      this.chars = chars;
      this.value = value;
   }
   interpret(ctx, index) {
      const char = ctx.input[index].toString().toUpperCase();
      const indexCode = this.chars.indexOf(char);
      if (indexCode >= 0) {
         ctx.output.push(`${this.value}${indexCode}`);
         return true;
      }
      return false;
   }
}

class VowelExpression extends Expression {
   constructor() {
      const chars = ["A", "E", "I", "O", "U"];
      super(chars, 'V');
   }
}
class ConsonantExpression extends Expression {
   constructor() {
      const chars = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z", "Y"];
      super(chars, 'C');
   }
}
class NumeralExpression extends Expression {
   constructor() {
      const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      super(chars, 'N');
   }
}
class PunctuationMarkExpression extends Expression {
   constructor() {
      const chars = [".", ",", "_", "-", "?", "!", "”", ";", ":", "(", ")", "{", "}", "[", "]", "’", "/", "\\", "`", "#"];
      super(chars, 'P');
   }
}
class SpaceExpression extends Expression {
   constructor() {
      const chars = [' '];
      super(chars, 'S');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const phrase = 'My login is: #789Zero';
const cxt = new Context(phrase);

const expressionTree = [];

expressionTree.push(new VowelExpression());
expressionTree.push(new ConsonantExpression());
expressionTree.push(new NumeralExpression());
expressionTree.push(new PunctuationMarkExpression());
expressionTree.push(new SpaceExpression());

for (let i in cxt.input) {
   expressionTree.some(expression => expression.interpret(cxt, i));
   if (cxt.input.length === ++i) console.log(cxt.output.join(':'));
}
