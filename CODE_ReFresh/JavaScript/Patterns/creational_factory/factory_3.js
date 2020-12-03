class Infantry {
   constructor() {
      this._type = 'goblin';
      this.scream = function() {
         return 'AAAAAAAAA! Za ordu!!!';
      };
   }
}

class Archer {
   constructor() {
      this._type = 'elf';
      this.magic_attack = function() {
         return 'Magic fog around you! You cant see!!';
      };
   }
}

class EnemyFactory{
   constructor() {
      this.createEnemy = function(type) {
         let enemy;

         switch (type) {
            case 'goblin':
            case 'ork':
               enemy = new Infantry();
               break;
            case 'elf':
               enemy = new Archer();
               break;
            default:
               enemy = {};
         }

         enemy.attack = function() {
            return `The ${this._type} is attack`;
         };
         return enemy;
      };
   }
}

const enemy_army = new EnemyFactory();
let newGoblin = enemy_army.createEnemy('goblin');
let newElf = enemy_army.createEnemy('elf');
console.log(newGoblin.attack());
console.log(newElf.attack());
console.log(newGoblin.scream());
console.log(newElf.magic_attack());
//произошло сражение
