const items = [
   "1 lb Salmon",
   "1 cup Pine Nuts",
   "2 cups Butter Lettuce",
   "1 Yellow Squash",
   "1/2 cup Olive Oil",
   "3 cloves of Garlic"
]
const list = React.DOM.ul(
   { className: "ingredients" },
   items.map((ingredient, key) => React.DOM.li({key}, ingredient))
)
ReactDOM.render(
   list,
   document.getElementById('react-container')
)
