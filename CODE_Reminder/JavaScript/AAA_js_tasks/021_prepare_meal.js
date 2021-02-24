function getIngredient(fruit) {
   return new Promise(resolve => {
      setTimeout(() => {
         return resolve(fruit);
      }, 500);
   })
}

async function prepareMeal(ingredients) {
   const meal = [];
   for (const ingredient of ingredients) {
      const item = await getIngredient(ingredient);
      const newItem = item.split('').reverse().join(''); // preparing each ingredient
      meal.push(newItem);
      console.log(newItem);
   }
   return meal;
}

//----------------------------------------------------------------------------------------------------------------------

(async () => {
   const ingredients = ['flour', 'sugar', 'salt', 'butter', 'egg', 'water', 'lemon juice', 'apples', 'nutmeg']
   const result = await prepareMeal(ingredients);
   console.log(result);
})();
