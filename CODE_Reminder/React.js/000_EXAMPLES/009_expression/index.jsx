const Item = ({ point }) => {
   return <li className={'blue'}>{point}</li>
}

const App = ({ list }) => {
   return <ul>{list.map((item, key) => {
      const result = <Item point={item} key={key}/>
      console.log(result);
      console.log('-------------------------------------------------');
      return result;
   })}</ul>;
}

//----------------------------------------------------------------------------------------------------------------------

const names = ['Bob', 'Joe', 'Alis', 'Rebeka'];

ReactDOM.render(
   <App  list={[...names]}/>,
   document.getElementById('root')
);
