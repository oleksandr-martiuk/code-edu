// TODO: абстрактные продукты: "чашка", "тарелка", "ложка" :)
class AbstractCup {
   create(){
      throw new Error('cup.create() not implemented yet');
   }
}
class AbstractPlate {
   create(){
      throw new Error('plate.create() not implemented yet');
   }
}
class AbstractSpoon {
   create(){
      throw new Error('spoon.create() not implemented yet');
   }
}

// TODO: абстрактная фабрика "Посуда"
class AbstractTablewareFactory {
   constructor(type) {
      this.type = type;
      this.instances = {}
   }
   getInstance(key, newClass) {
      const metalKey = this.type + key;
      if (!this.instances[metalKey]) {
         this.instances[metalKey] = new newClass();
      }
      return this.instances[metalKey];
   }
   createCup(){
      throw new Error('Tableware.createCup() not implemented yet');
   }
   createPlate(){
      throw new Error('Tableware.createPlate() not implemented yet');
   }
   createSpoon(){
      throw new Error('Tableware.createSpoon() not implemented yet');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// TODO: имплементация конкретных Продуктов (чашки, талерлки, ложки)

class MetalCup {
   create = () => console.log('Created "Metal" cup');
}
class MetalPlate {
   create = () => console.log('Created "Metal" plate');
}
class MetalSpoon {
   create = () => console.log('Created "Metal" spoon');
}
class GlassCup {
   create = () => console.log('Created "Glass" cup');
}
class GlassPlate {
   create = () => console.log('Created "Glass" plate');
}
class GlassSpoon {
   create = () => console.log('Created "Glass" spoon');
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// TODO: имплементация конкретных Фабрик (Металическая и Стеклянная посуда)

class MetalTableware extends AbstractTablewareFactory {
   constructor() {
      super('metal');
   }
   createCup = () => this.getInstance('cup', MetalCup);
   createPlate = () => this.getInstance('plate', MetalPlate);
   createSpoon = () => this.getInstance('spoon', MetalSpoon);
}

class GlassTableware extends AbstractTablewareFactory {
   constructor() {
      super('glass');
   }
   createCup = () => this.getInstance('cup', GlassCup);
   createPlate = () => this.getInstance('plate', GlassPlate);
   createSpoon = () => this.getInstance('spoon', GlassSpoon);
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const factory = new MetalTableware();
const cup = factory.createCup();
cup.create();
