class Developer {
   writeCode(){
      throw new Error(`Method "writeCode" is not defined`);
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

class JavaDeveloper extends Developer {
   writeCode() {
      console.log('Java developer writes Java code...');
   }
}

class CppDeveloper extends Developer {
   writeCode() {
      console.log('C++ developer writes C++ code...');
   }
}

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
// FlyWeight используется для того, что-бы поддерживать много мелких объектов

const developerFactory = (function() {
   const developers = {};

   return {
      getDevBySpecialty: function(specialty) {
         let dev = developers[specialty];

         if (dev) return dev;

         switch (specialty) {
            case 'Java':
               dev = new JavaDeveloper();
               break;
            case 'C++':
               dev = new CppDeveloper();
               break;
         }

         console.log(`Hiring ${specialty} developer`);
         developers[specialty] = dev;

         return dev;
      }
   }
})();

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

const developers = [];

developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('Java'));
developers.push(developerFactory.getDevBySpecialty('C++'));
developers.push(developerFactory.getDevBySpecialty('C++'));
developers.push(developerFactory.getDevBySpecialty('C++'));

for (const dev of developers) {
   dev.writeCode();
}
