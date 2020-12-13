// ~~~~~~~~~~~Subsystems~~~~~~~~~~~

class Power {
   checkVoltage() {
      //...complex logic
      return true;
   }
   checkCabelBreaks() {
      //...complex logic
      return true;
   }
}

class FlyController {
   constructor(model = 'Default', version = '0.0.1') {
      this.model = model;
      this.version = version;
   }
   checkGPS() {
      //...complex logic
      return true;
   }
   checkHumiditySensor() {
      //...complex logic
      return true;
   }
   checkTemperatureSensor() {
      //...complex logic
      return true;
   }
   checkMotionSensor() {
      //...complex logic
      return true;
   }
   checkGyroscope() {
      //...complex logic
      return true;
   }
}

class Engine {
   startEngines(){
      //...complex logic
      return 'Engine started';
   }
}

// ~~~~~~~~~~~~~Facade~~~~~~~~~~~~~

class Quadcopter {
   constructor(name = ''){
      this.name = name;
      this.power = new Power();
      this.flyController = new FlyController();
      this.engine = new Engine();
      this.status = null;
   }
   startEngine(){
      this.power.checkCabelBreaks();
      this.power.checkVoltage();

      this.flyController.checkGPS();
      this.flyController.checkGyroscope();
      this.flyController.checkMotionSensor();
      this.flyController.checkHumiditySensor();
      this.flyController.checkTemperatureSensor();

      this.status = this.engine.startEngines();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const quadcopter = new Quadcopter('Drone');
quadcopter.startEngine();

console.log(quadcopter.status);
