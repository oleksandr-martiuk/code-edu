class MagicStrategy {
   constructor(strategy) {
      this._stategy = strategy || new EarthMagic();
   }
   transform(strategy) {
      this._stategy = strategy;
   }
   use = () => {
      this._stategy.use();
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class Magic {
   constructor(name) {
      this.type = name;
   }
}

class AirMagic extends Magic {
   constructor() {
      super('Air');
   }
   use = () => console.log(`Magician of ${this.type} can fly in the air`);
}

class WaterMagic extends Magic {
   constructor() {
      super('Water');
   }
   use = () => console.log(`Magician of ${this.type} can swim under the water`);
}

class EarthMagic extends Magic {
   constructor() {
      super('Earth');
   }
   use = () => console.log(`Magician of ${this.type} can dig the earth too deep`);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const magician = new MagicStrategy()

const airMagic = new AirMagic();
const earthMagic = new EarthMagic();
const waterMagic = new WaterMagic();

magician.use();
magician.transform(airMagic);
magician.use();
magician.transform(waterMagic);
magician.use();
