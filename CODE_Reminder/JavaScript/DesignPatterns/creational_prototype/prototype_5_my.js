class Client {
   constructor(name, surname, age) {
      this.name = name;
      this.surname = surname;
      this.age = age;
   }
   operation_1 = () => console.log('this is operation #1');
   operation_2 = () => console.log('this is operation #2');
   operation_3 = () => console.log('this is operation #3');
}

class ClientPrototype {
   constructor(proto) {
      this.proto = proto;
   }
   clone() {
      const client = new Client();
      Object.keys(this.proto).forEach(key => client[key] = this.proto[key]);
      return client;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const client = new Client('Joe', 'Black', 33);

const clientPrototype = new ClientPrototype(client);
const clientClone = clientPrototype.clone();

console.log(clientClone);
clientClone.operation_2();
