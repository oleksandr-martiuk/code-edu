class Shipping {
   constructor() {
      this.company = "";
   }
   setStrategy(company) {
      this.company = company;
   }
   calculate(pkg) {
      return this.company.calculate(pkg);
   }
}

class JqDelivery {
   calculate(pkg) {
      /* ...some calculation of shipping for QjDelivery */
      return "$ 45.95";
   }
}

class OldPost {
   calculate(pkg) {
      /* ...some calculation of shipping for OldPost */
      return "$ 133.21";
   }
}

class BestDelivery {
   calculate(pkg) {
      /* ...some calculation of shipping for BestDelivery */
      return "$ 22.26";
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const package = { from: "76712", to: "10012", weight: "lkg" };

// the 3 strategies

const jqDelivery = new JqDelivery();
const oldPost = new OldPost();
const bestDelivery = new BestDelivery();

const shipping = new Shipping();

shipping.setStrategy(jqDelivery);
console.log(shipping.calculate(package));
shipping.setStrategy(oldPost);
console.log(shipping.calculate(package));
shipping.setStrategy(bestDelivery);
console.log(shipping.calculate(package));
