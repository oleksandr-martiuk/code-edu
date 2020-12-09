class User {
   constructor(name, age) {
      this._name = name;
      this._age = age;
      this._type = 'User';
   }
   getUser(){
      console.log(`${this._type} '${this._name}' is ${this._age} years old`)
   }
}
class Customer {
   constructor(name, brand) {
      this._name = name;
      this._brand = brand;
      this._type = 'Customer';
   }
   getCustomer(){
      console.log(`${this._type} ${this._name} likes our brand "${this._age}"`)
   }
}

class UserFactory {
   create(type, args) {
      switch (type) {
         case 'user': return new User(...args);
         case 'customer': return new Customer(...args);
         default:
            throw new Error('Wrong user type passed.');
      }
   }
}

//----------------------------------------------------------------------------------------------------------------------

const userFactory = new UserFactory();

const user = userFactory.create('user', ['Bob', 74]);
user.getUser();

// const admin = userFactory.create('admin'); // Throws error
