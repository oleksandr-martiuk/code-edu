class EarthBeing {
   constructor(name, type, home) {
      this.name = name;
      this.type = type;
      this.home = home;
   }
   accept(visitor) {
      visitor.visit(this);
   }
   who(){
      console.log(`I'm ${this.type} ${this.name}. I live in the ${this.home}`);
   }
}

class HomeVisitor {
   constructor() {
      this.allowedHomes = ['Sea', 'Ocean', 'Lake'];
   }
   visit(some) {
      switch (some.home) {
         case 'Cave':
            some.home = 'Ocean';
            return;
         case 'Ocean':
            some.home = 'Forest';
            return;
         default:
            some.home = 'Cave';
            return;
      }
   }
}

class ExtraDetailsVisitor {
   visit(some) {
      some.details = { tail: 1, ears: 2 };
      some.who = () => {
         console.log(`I'm ${some.type} ${some.name}. My home is in the "${some.home}". And I have ${some.details.tail} tail and ${some.details.ears} ears`);
      }
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const earthBeings = [
   new EarthBeing('Billy', 'fish', 'Ocean'),
   new EarthBeing('Tim', 'wolf', 'Cave'),
   new EarthBeing('Jimmy', 'eagle', 'Mountain')
];

const visitorExtraDetails = new ExtraDetailsVisitor();
const visitorHome = new HomeVisitor();

// such result is total mess o_O
earthBeings.forEach(earthBeing => {
   earthBeing.accept(visitorExtraDetails);
   earthBeing.accept(visitorHome);

   earthBeing.who();
});
