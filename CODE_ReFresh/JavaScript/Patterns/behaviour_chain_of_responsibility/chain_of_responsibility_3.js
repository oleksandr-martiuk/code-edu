class Request {
  constructor(amount) {
    this.amount = amount;
  }
  get(bill) {
    const count = Math.floor(this.amount/bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  }
}

const request = new Request(1287);
request.get(100).get(50).get(20).get(10).get(5).get(1);
