class AbstractDatastore {
  connect(){
    throw new Error(`method "connect()" not implemented yet`);
  }
  select() {
    throw new Error(`method "select()" not implemented yet`);
  }
  where() {
    throw new Error(`method "where()" not implemented yet`);
  }
  disconnect() {
    throw new Error(`method "disconnect()" not implemented yet`);
  }
  process() {
    this.connect();
    this.select();
    this.disconnect();
  }
}

function inheritTemplateMethod(proto) {
  class F extends proto {}
  return new F();
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const mySql = inheritTemplateMethod(AbstractDatastore);

// implement template steps
mySql.connect = () => console.log("MySQL: connect step");
mySql.select = () => console.log("MySQL: select step");
mySql.disconnect = () => console.log("MySQL: disconnect step");

mySql.process();
