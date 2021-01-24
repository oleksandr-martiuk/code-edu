class Seller {
   constructor(client, id) {
      this.client = client || "Default_Client"
      this.sellerId = id || 1;
   }
   acceptClientOrder = () => console.log(`Order has been accepted from ${this.client}`);
   transferOrderToWorkshop = () => console.log('Order sent to the workshop');
   signContract = () => console.log(`Contract is signed with ${this.client}`);
   takeFirstPayment = (percent = 30) => console.log(`${percent}% of payment is accepted from ${this.client}`);
   getFullPayment = () => console.log(`Got full payment from ${this.client}`);
}

class Buyer {
   constructor(id) {
      this.buyerId = id || 1;
   }
   acceptPurchaseOrder = () => console.log('Purchase Order is accepted');
   buyMaterials = () => console.log('Materials is bought');
   buyTools = () => console.log('Construction Tools is bought');
   transferOrder = () => console.log('Order is transferred');
}

class Worker {
   constructor(id) {
      this.workerId = id || 1;
   }
   createLayout = () => console.log('Layout is created');
   transferPurchaseOrder = () => console.log('Purchase Order is transferred');
   acceptMaterialsAndTools = () => console.log('Materials and Tools are accepted');
   cutBlanks = () => console.log('Blanks is cutted');
   assembleProduct = () => console.log('Product is assembled');
   transferProductToCollector = () => console.log('Product transferred to collector');
}

class Collector {
   constructor(id) {
      this.collectorId = id || 1;
   }
   deliverProductToClient = () => console.log('Product is delivered to the client');
   collectProduct = () => console.log('Product is collected');
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Facade
class Product {
   constructor(client, product) {
      this.product = product;
      this.seller = new Seller(client);
      this.buyer = new Buyer();
      this.worker = new Worker();
      this.collector = new Collector();
   }
   makeOrder = () => {
      this.seller.acceptClientOrder();
      this.seller.signContract();
      this.seller.transferOrderToWorkshop();
      this.seller.takeFirstPayment();
      this.seller.transferOrderToWorkshop();
      this.worker.transferPurchaseOrder();

      return `----- Order for the ${this.product} is accepted -----`;
   }
   getProduct = () => {
      this.buyer.acceptPurchaseOrder();
      this.buyer.buyMaterials();
      this.buyer.buyTools();
      this.buyer.transferOrder();

      this.worker.createLayout();
      this.worker.acceptMaterialsAndTools();
      this.worker.cutBlanks();
      this.worker.assembleProduct();
      this.worker.transferProductToCollector();

      this.collector.deliverProductToClient();
      this.collector.collectProduct();

      this.seller.getFullPayment();

      return `----- New ${this.product} is created and delivered -----`;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const product = new Product('Sebastian Mihalevich', 'wardrobe');

const orderResult = product.makeOrder();
console.log(orderResult);
const deliveryResult = product.getProduct();
console.log(deliveryResult);
