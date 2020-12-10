class Gadget {
   constructor(name, production = {}) {
      this.name = name;
      this.yearOfProd = production.year || '2000';
      this.companyName = production.company || null;
   }
   getDevice() {
      return {
         name: this.name,
         year: this.yearOfProd,
         company: this.companyName
      }
   }
}

class GadgetPrototype {
   constructor(proto) {
      this.proto = proto;
   }
   clone() {
      const gadget = new Gadget();

      gadget.name = this.proto.name;
      gadget.yearOfProd = this.proto.yearOfProd;
      gadget.companyName = this.proto.companyName;

      return gadget;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const proto = new Gadget('refrigerator', { year: '2009', company: 'HandsomeFri' });
const prototype = new GadgetPrototype(proto);

const gadget = prototype.clone();
console.log(gadget.getDevice());
