import React from 'react';

export default class Clock extends React.Component {
   constructor(props) {
      console.log('----------[ Clock: constructor() ]');
      super(props);
      this.state = { date: new Date() }
   }

   componentDidMount() {
      this.timerID = setInterval(() => {
         console.log('----------[ Clock: componentDidMount() ]', { timeID: this.timerID });
         this.setState({ date: new Date() });
      }, 1000);
   }

   componentWillUnmount() {
      console.log('----------[ Clock: componentWillUnmount() ]', { timeID: this.timerID });
      clearInterval(this.timerID);
   }

   render() {
      console.log('----------[ Clock: render() ]');
      return (<>
         Clock: { this.state.date.toString() }
      </>);
   };
}
