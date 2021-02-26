import React from 'react';

export default class ProgressBar2 extends React.Component {
   constructor(props) {
      console.log('ProgressBar2 ---> constructor()');
      super(props)
      this.state = { progress: 10 };
   }

   shouldComponentUpdate(nextProps, nextState, nextContext) {
      this.setState({ progress: this.state.progress + 1 });
      console.log('ProgressBar2 ---> shouldComponentUpdate()', { nextState });
      return true;
   }

   componentDidMount() {
      this.setState({ progress: this.state.progress + 1 });
      console.log('ProgressBar2 ---> componentDidMount()', { progress: this.state.progress });
   }

   render() {
      console.log('ProgressBar2 ---> render()');
      return (<div style={{ width: '50%' }}>
         <Scale width={ this.state.progress }/>
      </div>);
   }
}

class Scale extends React.Component {
   constructor(props) {
      console.log('Scale ---> constructor()');
      super(props);
      this.state = { width: this.props.width };
   }

   render() {
      console.log('Scale ---> render()');
      return (<div style={{
            backgroundColor: '#0088d0',
            height: '10px',
            width: this.state.width + '%',
         }}
      />);
   }
}
