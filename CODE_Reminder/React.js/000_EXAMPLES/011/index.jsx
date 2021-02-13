const Paragraph = ({ item }) => <p>{JSON.stringify(item)}</p>

const Paragraphs = ({ items: textItems }) => textItems.map((item, i) => <Paragraph item={item} key={i}/>)

const App = ({ items }) => (<div>
   <Paragraphs items={ items }/>
</div>);

//----------------------------------------------------------------------------------------------------------------------

const ingredients = [
   { "name": "Salmon", "amount": 1, "measurement": "l lb" },
   { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
   { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" }
];

ReactDOM.render(
   <App items={ingredients}/>,
   document.getElementById('root')
);
