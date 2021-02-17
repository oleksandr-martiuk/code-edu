import React from "react";

import TicTacToe from '../Game';

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <TicTacToe/>
   </div>
}
