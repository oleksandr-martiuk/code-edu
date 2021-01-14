// Abstract as you must have a specific fighter
class Fighter  {
   constructor(kickBehavior,jumpBehavior) {
      this._jumpBehavior = jumpBehavior;
      this._kickBehavior = kickBehavior;
   }

   punch = () => console.log("Default Punch");
   kick = () => this._kickBehavior.kick();
   jump = () => this._jumpBehavior.jump();
   roll = () => console.log("Default Roll");

   set kickBehavior(kickBehavior) {
      this._kickBehavior = kickBehavior;
   }
   set jumpBehavior(jumpBehavior) {
      this._jumpBehavior = jumpBehavior;
   }

   display() {
      throw new Error('Method display() is not implemented yet');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Encapsulated kick behaviors
class KickBehavior {
   kick() {
      throw new Error('Method kick() is not implemented yet');
   }
}

class LightningKick extends KickBehavior {
   kick = () => console.log("Lightning Kick");
}

class TornadoKick extends KickBehavior {
   kick = () => console.log("Tornado Kick");
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Encapsulated jump behaviors
class JumpBehavior {
   jump(){
      throw new Error('Method jump() is not implemented yet');
   };
}

class ShortJump extends JumpBehavior {
   jump = () => console.log("Short Jump");
}

class LongJump extends JumpBehavior {
   jump = () => console.log("Long Jump");
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// Characters
class Ryu extends Fighter {
   constructor(kickBehavior, jumpBehavior) {
      super(kickBehavior, jumpBehavior);
   }
   display = () => console.log("Ryu");
}

class Ken extends Fighter {
   constructor(kickBehavior, jumpBehavior) {
      super(kickBehavior, jumpBehavior);
   }
   display = () => console.log("Ken");
}

class ChunLi extends Fighter {
   constructor(kickBehavior, jumpBehavior) {
      super(kickBehavior, jumpBehavior);
   }
   display = () => console.log("ChunLi");
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

// let us make some behaviors first
const shortJump = new ShortJump();
const longJump = new LongJump();
const tornadoKick = new TornadoKick();

// Make a fighter with desired behaviors
const ken = new Ken(tornadoKick,shortJump);
ken.display();

// Test behaviors
ken.punch();
ken.kick();
ken.jump();

// Change behavior dynamically (algorithms are interchangeable)
ken.jumpBehavior = longJump;
ken.jump();
