import React from "react";
import './my-component.scss';
import { getName } from "../../../api/getName";

export default class MyComponent extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         name: 'John',
         age: 88
      }
   }

   componentDidMount() {
      getName()
         .then(result => {
            this.setState({ name: result.name });
         })
   }

   render() {
      return (<>
         Name: {this.state.name}<br/>
         Age: {this.state.age}
      </>);
   }
}
