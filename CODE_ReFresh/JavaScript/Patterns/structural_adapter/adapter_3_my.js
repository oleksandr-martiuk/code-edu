// old calculations
class Quadcopter {
   constructor(props) {
      this.name = props.name || "Default";
      this.model = props.model || "v0.1";
      this.material = props.material || 'plastic';
      this.high = props.high || null;
      this.width = props.width || null;
      this.wings = props.wings || null;
      this.engines = props.engines || 0;
      this.controller = props.controller || null;
   }
   calculatePower(material, h, w, wings, engines, controller) {
      //... some calculation
      return '42';
   }
}

// new calculations
class UpgradedDrone {
   constructor({ name, model, company, country }) {
      this.name = name;
      this.model = model;
      this.producer = { company, country };
   }
   getSize(high, width) {
      /* ..... */
   }
   getAvgWindSpeed() {
      /* ..... */
   }
   calcMaxSpeed(props) {
      /* ..... */
   }
   windResistance(params) {
      /* ..... */
   }
   getControllerPower(params){
      /* ..... */
   }
   calcPower(params) {
      //... some calculation
      return '42';
   }
}

class QAdapter {
   constructor(params) {
      this.drone = new UpgradedDrone(params);
   }
   calculatePower(material, h, w, wings, engines, controller) {
      const windSpeed = this.drone.getAvgWindSpeed();
      const size = this.drone.getSize(h, w);
      const qSpeed = this.drone.calcMaxSpeed({ wings, engines, size });
      const controllerPower = this.drone.getControllerPower({ controller, windSpeed });

      const qPower = this.drone.calcPower({ controllerPower, qSpeed });

      return qPower;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const oldQuadcopter = new Quadcopter({});
const oldPowerCalc = oldQuadcopter.calculatePower('wood', '55', '49', 8, 4, {});
console.log(oldPowerCalc);

const droneAdapter = new UpgradedDrone({name: 'Astoria', model: 'v.2.0.15', company: 'Yoshi', country: 'UKR'});
const dronePower = droneAdapter.calcPower({});
console.log(dronePower);
