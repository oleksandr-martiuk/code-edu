import React from 'react'
import Square from '../Square/Square';

export default class Board extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array(9).fill(null),
      }
   }

   renderSquare(i) {
      return <Square value={this.state.squares[i]}/>
   }

   render() {
      return <div>Hello</div>
   }
}
