// old interface
class Shipping {
   request(zipStart, zipEnd, weight) {
      // ...
      return "$49.75";
   }
}

// new interface
class AdvancedShipping {
   login(credentials) {
      /* ... */
   }
   setStart(start) {
      /* ... */
   }
   setDestination(destination) {
      /* ... */
   }
   calculate(weight) {
      // ...
      return "$39.50";
   }
}

class ShippingAdapter {
   constructor(credentials) {
      this.shipping = new AdvancedShipping();
      this.login(credentials);
   }
   login(credentials) {
      this.shipping.login(credentials);
   }
   request(zipStart, zipEnd, weight) {
      this.shipping.setStart(zipStart);
      this.shipping.setDestination(zipEnd);
      return this.shipping.calculate(weight);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// original shipping object and interface
const shipping = new Shipping();
const costOriginal = shipping.request("78701", "10010", "2 lbs");
console.log(costOriginal);

// new shipping object with adapted interface
const credentials = { token: 'qw1e-2rt3y' }
const adapter = new ShippingAdapter(credentials);
const costAdapter = adapter.request("78701", "10010", "2 lbs");
console.log(costOriginal);
