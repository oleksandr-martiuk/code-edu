const greet = {
   hello(appeal) {
      return (<h1 className={'hello'}>Hello dear {appeal}! :)</h1>);
   },
   getOut(appeal) {
      return (<h1 className={'getOut'}>Get out! You are NOT welcome here "dear" {appeal}. >/</h1>);
   }
};

const App = ({ welcome, call }) => {
   const result = welcome ? greet.hello(call) : greet.getOut(call);
   console.log(result);
   return result;
}

//----------------------------------------------------------------------------------------------------------------------

const randCall = Math.round(Math.random()*10) > 4;

ReactDOM.render(
   <App  welcome={randCall} call="Friend"/>,
   document.getElementById('root')
);
