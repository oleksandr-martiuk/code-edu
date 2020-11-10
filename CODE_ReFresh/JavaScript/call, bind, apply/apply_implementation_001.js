Function.prototype.myApply = function(context, args = null) {
   if (args && !Array.isArray(args)) throw Error('Second arguments must be an Array');

   const symKey = Symbol();
   context[symKey] = this;

   setTimeout(() => (delete context[symKey]), 100);

   return context[symKey](args);
}

//----------------------------------------------------------------------------------------------------------------------

function getReport(numArgs) {
   let count = numArgs.reduce((acc, i) => {
      return acc + i;
   }, 0);
   return `${this.fName} ${this.sName} totally did ${count} steps`;
}

const steps = [33, 11, 43, 87, 156];
const person = { fName: 'Bill', sName: 'Thomson' };

const resMsg = getReport.myApply(person, steps);
// const resMsg = getReport.myApply(person);

console.log(resMsg);
