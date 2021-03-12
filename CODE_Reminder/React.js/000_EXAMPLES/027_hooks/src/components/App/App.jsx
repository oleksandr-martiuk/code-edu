import React from "react";
import './app.scss';

import { MyCounter } from '../Counter/Counter';

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <MyCounter/>
   </div>
}
