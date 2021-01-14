class Context {}

class AbstractExpression {
   interpret(context) {}
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class TerminalExpression extends AbstractExpression {
   interpret(context) {
      console.log("Called Terminal.interpret()");
   }
}
class NonTerminalExpression extends AbstractExpression {
   interpret(context) {
      console.log("Called NonTerminal.interpret()");
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const context = new Context();
const list = [];

list.push(new TerminalExpression());
list.push(new NonTerminalExpression());
list.push(new TerminalExpression());
list.push(new TerminalExpression());

list.forEach(exp => exp.interpret(context));
