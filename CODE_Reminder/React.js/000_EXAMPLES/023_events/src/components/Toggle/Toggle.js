import React from 'react';

export default class Toggle extends React.Component {
   constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      // IN CASE we using function: such bind is obligated for the work of 'this' inside of callback
      this.handleClick1 = this.handleClick1.bind(this);
   }

   handleClick1() {
      this.setState(state => ({ isToggleOn: !state.isToggleOn }));
   }
   handleClick2 = () => {
      // IN CASE we use arrow function - it binds 'this' to the context of class
      this.setState(state => ({ isToggleOn: !state.isToggleOn }));
   }

   render() {
      const getBtnStyle = bgColor => ({
         backgroundColor: bgColor,
         width: '100px',
         padding: '5px 25px',
         margin: '0 5px',
         cursor: 'pointer',
      });
      return (<>
         <button onClick={this.handleClick1} style={getBtnStyle('#a4f2ff')}>
            {this.state.isToggleOn ? '1. ON' : '1. OFF'}
         </button>
         <button onClick={this.handleClick2} style={getBtnStyle('#b2f677')}>
            {this.state.isToggleOn ? '2. ON' : '2. OFF'}
         </button>
      </>);
   };
}
