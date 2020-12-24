// interface
class Expression {
   interpret(context = ''){
      throw new Error(`method 'interpret()' not defined yet`);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class AndExpression extends Expression {
   constructor(expression1, expression2) {
      super();
      this.expr1 = expression1;
      this.expr2 = expression2;
   }
   interpret(context) {
      return (this.expr1.interpret(context) && this.expr2.interpret(context));
   }
}

class OrExpression extends Expression {
   constructor(expression1, expression2) {
      super();
      this.expr1 = expression1;
      this.expr2 = expression2;
   }
   interpret(context) {
      return (this.expr1.interpret(context) || this.expr2.interpret(context));
   }
}

class TerminalExpression extends Expression {
   constructor(data) {
      super();
      this.data = data;
   }
   interpret(context) {
      return !!context.includes(this.data);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function getJavaExpression() {
   const java = new TerminalExpression('Java');
   const javaCore = new TerminalExpression('Java Core');

   return new OrExpression(java, javaCore);
}

function getJavaEEExpression() {
   const java = new TerminalExpression('Java');
   const javaCore = new TerminalExpression('Spring');

   return new AndExpression(java, javaCore);
}

const isJava = getJavaExpression();
const isJavaEEDeveloper = getJavaEEExpression();

console.log('Does developer know Java Core: ', isJava.interpret('Java Core'));
console.log('Does developer know Java EE: ', isJavaEEDeveloper.interpret('Java Spring'));
