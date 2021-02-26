import React from "react";
import './app.scss';

import People from "../People/People";
import A from "../Recursion/A";
import Clock from "../Clock/Clock";
import {ProgressBar} from "../ProgressBar/ProgressBar";

export function App({title}) {
   return <div>
      <h1>{title}</h1><hr/>
      <People/><hr/>
      {/*Recursion: <A index={0}/>*/}
      <Clock/><hr/>
      {/*<ProgressBar/><hr/>*/}
   </div>
}
