import React from "react";
import './app.scss';

import { ProgressBar1 } from "../ProgressBar1/ProgressBar1";
import Progress from "../ProgressBar2/ProgressBar2";

export function App({title}) {
   return <div>
      <h1>{title}</h1><hr/>
      <ProgressBar1/><hr/>
      <Progress/><hr/>
   </div>
}
