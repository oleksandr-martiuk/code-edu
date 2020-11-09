// https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b

Function.prototype.myBind = function(context) {
   for (const k in context) {
      this[k] = context[k];
   }
   return this;
}

function getName() {
   console.log(this.fName, this.sName);
}

getName.myBind({ fName: 'Bill', sName: 'Turner' });
getName();
