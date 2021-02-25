import React from 'react';

export default class Clock extends React.Component {
   constructor(props) {
      console.log('----------[ Clock: 1. constructor() ]');
      super(props);
      this.state = { date: new Date() }
   }

   static getDerivedStateFromProps(props, state) {
      console.log('----------[ Clock: 2. static getDerivedStateFromProps() ]', { props, state });
      console.log('type of state.date: ', Object.keys(state.date));
      return null;
   }

   componentDidMount() {
      console.log('----------[ Clock: componentDidMount() ]');
      // this.timerID = setInterval(() => this.tick(), 1000);
   }

   componentWillUnmount() {
      console.log('----------[ Clock: componentWillUnmount() ]');
      // clearInterval(this.timerID);
   }

   render() {
      console.log('----------[ Clock: render() ]');
      return (<>This is our Clock</>);
   }
}
