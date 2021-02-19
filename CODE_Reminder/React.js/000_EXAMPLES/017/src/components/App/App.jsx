import React from "react";
import './app.scss';

import { MyCounter } from '../Counter/Counter';
import { MyTest } from "../MyTest/MyTest";

export function App({ title }) {
   return <div>
      <h1>{title}</h1>
      <hr/>
      <MyCounter/>
      <hr/>
      <MyTest some={'...test...'}/>
   </div>
}
