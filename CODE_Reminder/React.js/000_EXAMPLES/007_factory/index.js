const { render } = ReactDOM;

const IngredientsList = ({ list }) =>
   React.createElement('ul', null,
      list.map((ingredient, i) =>
         React.createElement('li', {key: i}, ingredient)
      )
   )

const Ingredients = React.createFactory(IngredientsList)

const list = [
   "1 lb Salmon",
   "1 cup Pine Nuts",
   "2 cups Butter Lettuce",
   "1 Yellow Squash",
   "1/2 cup Olive Oil",
   "3 cloves of Garlic"
]

render(
   Ingredients({list}),
   document.getElementById('react-container')
)
