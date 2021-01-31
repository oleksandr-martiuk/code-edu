const map = new Map();

map.set('hobby', 'cycling');

let foods = { dinner: 'Curry', lunch: 'Sandwich', breakfast: 'Eggs' };
let normalFoods = {};

map.set(normalFoods, foods);

for(let [key, value] of map) {
   console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
}

console.log(map.get(normalFoods));
