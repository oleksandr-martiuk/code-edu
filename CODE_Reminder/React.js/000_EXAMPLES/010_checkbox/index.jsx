const names=['Bob', 'Joe', 'Alis', 'Rebeka'];

//----------------------------------------------------------------------------------------------------------------------

const CheckBox = ({
      item,
      checked=true
   }) => {
   const handleClick = (item) => console.log(item);
   return <input
      type="checkbox"
      defaultChecked={checked}
      className={'blue'}
      onClick={handleClick}
   />;
}

const CheckBoxList = ({ items }) => {
   return (items.map((item, index) => <CheckBox key={index} item={item}/>) );
}

const App = () => (<div><CheckBoxList items={names}/></div>);

//----------------------------------------------------------------------------------------------------------------------

ReactDOM.render(
   <App/>,
   document.getElementById('root')
);
