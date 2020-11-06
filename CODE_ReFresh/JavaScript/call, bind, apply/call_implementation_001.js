// https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b -----------------

function showProfileMessage(...messages) {
   console.log(this.pName, ": ", [...messages].join(', '));
}
showProfileMessage('Hello');

const tom = { pName: 'Tom Sawyer' }
showProfileMessage.call(tom, 'Hi');

// ---------------------------------------------------------------------------------------------------------------------

Function.prototype.myCall = function(fThis, ...args) {
   fThis.fnName = this;
   fThis.fnName(...args);
}

showProfileMessage.myCall(tom, 'Hi', 'hello', 'yo', 'whats up');

(function (title) {
   console.log(title, ': ', this.pName, ' is ', this.age, ' years old');
}).myCall(
   { pName: 'Igor', age: 33},
   'Report'
);

// // TypeError: fThis.fnName is not a function
// showProfileMessage.myCall('Bill', 'Hi', 'hello', 'yo', 'whats up');

function run(motivation){
   console.log('go-go-go');
}
showProfileMessage.myCall(run, 'Hi', 'hello', 'yo', 'whats up');

// ---------------------------------------------------------------------------------------------------------------------
// .call does not support Arrow Function, because it does not have '.this'

const f = (message) => console.log(message, this.name);

f.myCall({name: 'Janet'}, 'Hello');

this.name = '1-Bill';
const name = '2-Jim';

f.myCall({name: 'Janet'}, 'Hello');
