class User {
   constructor(name) {
      this.name = name;
   }
   say() {
      console.log(`User: ${this.name}`);
   }
}

class DecoratedUser {
   constructor(user, address) {
      this.user = user;
      this.name = user.name;
      this.city = address.city;
      this.street = address.street;
      this.building = address.building;
   }
   say() {
      console.log(`Decorated User: ${this.name} (${this.city}, ${this.street}, ${this.building})`);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const user = new User("Kelly");
user.say();

const decorated = new DecoratedUser(user, { city: "New York", street: "Maryland Str.", building: 77 });
decorated.say();
