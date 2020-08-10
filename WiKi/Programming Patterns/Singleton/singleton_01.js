let instance = null;

function User (name, age) {
  if (instance) return instance;

  instance = this;
  this.name = name;
  this.age = age;

  return instance;
}

const user1 = new User('Peter', 25);
const user2 = new User('Mark', 34); // not used class

console.log(user1 === user2);

console.log(user1.name, user1.age);
console.log(user2.name, user2.age);
