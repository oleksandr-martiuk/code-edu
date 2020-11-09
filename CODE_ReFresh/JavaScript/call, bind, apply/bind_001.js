https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b

var person = {
   lastName: "Dallas"
};

function fullName(greeting, firstName) {
   console.log(greeting, firstName, this.lastName);
}

var bindFullName = fullName.bind(person, "Mr");

bindFullName("Jared");
