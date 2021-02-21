import React from "react";
import './app.scss';

import {MyCounter} from '../Counter/Counter';
import {MyTest} from "../MyTest/MyTest";
import {Timer} from "../Timer/Timer";
import {Clock2} from "../Clock2/Clock2";

export default function App({ title }) {
   return <div>
      <h1>{title}</h1><hr/>
      <MyCounter/><hr/>
      <MyTest some={'...test...'}/><hr/>
      <Clock2/><hr/>
      {/*<Timer/><hr/>*/}
   </div>
}
