class Person {
    constructor(name) {
        this.name = name;
    }

    get() {
        return this.name;
    }
}

const bill = new Person('Bill');
console.log(bill.get());

function decorator (prevP) {
    prevP.prototype.run = function() {
        console.log(`${this.name} is running...`);
    }

    return prevP;
}

const UpdatedPerson = decorator(Person);
const jack = new UpdatedPerson('Jack');

jack.run();
