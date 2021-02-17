import React from "react";
import '../../styles/styles.scss';

import { Game as TicTacToe } from '../Game/Game';

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <TicTacToe/>
   </div>
}
