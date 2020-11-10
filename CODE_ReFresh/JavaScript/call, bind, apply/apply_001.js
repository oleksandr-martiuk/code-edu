function getStepsRes(...numArgs) {
   let count = numArgs.reduce((acc, i) => {
      return acc + i;
   }, 0);
   return `${this.fName} ${this.sName} totally did ${count} steps`;
}

//----------------------------------------------------------------------------------------------------------------------

const steps = [33, 11, 43, 87, 156];
const person = { fName: 'Will', sName: 'Turner' }

const resMsg = getStepsRes.apply(person, steps);

console.log(resMsg);
