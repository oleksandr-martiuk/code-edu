class Address {
    constructor(city, street, house) {
        this.city = city;
        this.street = street;
        this.house = house;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    who() {
        console.log(`My name is ${this.name}`);
    }
}

class UserDecorator {
    constructor(user, address) {
        this.name = user.name;
        this.city = address.city;
        this.street = address.street;
        this.house = address.house;
    }
    who(){
        console.log(`
            Hello dear friends!
            My name is ${this.name}.
            I live in ${this.city}. On the street: "${this.house}th ${this.street}".
        `);
    }
}

const john = new User('John');
const johnAddress = new Address('Washington', 'Camila Lee', 112);
const decoratedJohn = new UserDecorator(john, johnAddress);

john.who();
decoratedJohn.who();
