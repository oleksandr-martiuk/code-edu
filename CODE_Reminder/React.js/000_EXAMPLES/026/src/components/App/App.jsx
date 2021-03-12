import React from "react";

import MultipleInputs from "../MultipleInputs/MultipleInputs";
import Temperature from "../Temperature/Temperature";

import './app.scss';
import WelcomeDialog from "../WelcomeDialog/WelcomeDialog";
import Compute from "../Compute/Compute";
import ProgressBar from "../ProgressBar/ProgressBar";

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <MultipleInputs/><hr/>
      <Temperature/>
      <WelcomeDialog/>
      <Compute/>
      <ProgressBar/>
   </div>
}
