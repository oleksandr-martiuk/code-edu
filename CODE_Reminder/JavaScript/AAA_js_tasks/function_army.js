function makeArmy() {
   let shooters = [];
   let i = 0;

   while (i < 10) {
      function shooter () {
         return console.log(shooter.a);
      }
      shooter.a = i;

      shooters.push(shooter);
      i++;
   }

   return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10

// ...у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
