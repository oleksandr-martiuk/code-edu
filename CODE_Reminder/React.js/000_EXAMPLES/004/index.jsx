function Welcome(props) {
   return <h1>Hi, {props.name}</h1>;
}

function App() {
   return (
      <div>
         <Welcome name="Alis" />
         <Welcome name="Brad" />
         <Welcome name="Sam" />
      </div>
   );
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
);
