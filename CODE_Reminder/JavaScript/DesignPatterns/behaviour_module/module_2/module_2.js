/**
 * Паттерн «Модуль» полностью инкапсулирует данные, к которым можно обратиться только через публичные методы.
 * В JavaScript нет публичный методов «из коробки».
 * По этому "Модуль" реализуется через замыкание.
 */
const first_Module = (function() {
   let Surname = "Ivanov";
   let Nickname = "ii313";
   function declare_Surname() {
      console.log(Surname);
   }
   return {
      declare_Nickname: function() {
         console.log(Nickname);
      }
   }
})();

first_Module.declare_Nickname();

// console.log(Surname); // we don't have access for the property 'Surname'
