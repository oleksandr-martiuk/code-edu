const ingredientItem = (ingredient, index) => {
   const styleName = ingredient.active ? 'active' : 'inactive';
   return (<li key={index} className={ `ingredient ${styleName}` }>{ingredient.name}</li>);
}

const IngredientsList = ({ items }) => {
   return(
      <ul>{
         items.map((ingredient, i) => ingredientItem(ingredient, i))
      }</ul>
   )
}

const items = [
   { name: "1 lb Salmon", active: true},
   { name: "1 cup Pine Nuts", active: false},
   { name: "2 cups Butter Lettuce", active: false},
   { name: "1 Yellow Squash", active: true},
   { name: "1/2 cup Olive Oil", active: false},
   { name: "3 cloves of Garlic", active: true}
];

ReactDOM.render(
   <IngredientsList items={items}/>,
   document.getElementById('react-container')
);
