class Spoon {
   constructor(material) {
      this.material = material;
   }
}
class Fork {
   constructor(material) {
      this.material = material;
   }
}
class Plate {
   constructor(material) {
      this.material = material;
   }
}
class Cup {
   constructor(material) {
      this.material = material;
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// FlyWeight
const equipmentFactory = (function() {
   const equipments = {}

   const getEquipment = (type, material) => {
      console.log(`Added ${material} ${type}`);
      let equipment = null;
      if (type === 'spoon') equipment = new Spoon(material);
      else if (type === 'fork') equipment = new Fork(material);
      else if (type === 'plate') equipment = new Plate(material);
      else if (type === 'cup') equipment = new Cup(material);
      return equipment;
   }

   return {
      add: function(type, material) {
         console.count('equipment');
         const key = `${type}-${material}`;
         if (equipments[key]) return equipments[key];
         equipments[key] = getEquipment(type, material);
         return equipments[key];
      },
      getEquipments: function(){
         console.log(equipments);
      }
   }
})();

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const banquetEquipments = []

banquetEquipments.push(equipmentFactory.add('cup', 'glass'));
banquetEquipments.push(equipmentFactory.add('cup', 'glass'));
banquetEquipments.push(equipmentFactory.add('cup', 'glass'));
banquetEquipments.push(equipmentFactory.add('cup', 'glass'));
banquetEquipments.push(equipmentFactory.add('cup', 'glass'));
banquetEquipments.push(equipmentFactory.add('spoon', 'metal'));
banquetEquipments.push(equipmentFactory.add('spoon', 'metal'));
banquetEquipments.push(equipmentFactory.add('fork', 'metal'));
banquetEquipments.push(equipmentFactory.add('fork', 'metal'));
banquetEquipments.push(equipmentFactory.add('fork', 'metal'));
banquetEquipments.push(equipmentFactory.add('plate', 'ceramic'));
banquetEquipments.push(equipmentFactory.add('plate', 'ceramic'));
banquetEquipments.push(equipmentFactory.add('plate', 'ceramic'));
banquetEquipments.push(equipmentFactory.add('plate', 'ceramic'));
banquetEquipments.push(equipmentFactory.add('plate', 'ceramic'));
banquetEquipments.push(equipmentFactory.add('plate', 'glass'));

console.log(banquetEquipments);
