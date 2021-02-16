import React from "react";
import './app.scss';

import { Board } from '../Game/index';

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <Board/>
   </div>
}
