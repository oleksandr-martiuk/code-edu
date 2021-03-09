import React from "react";

import MultipleInputs from "../MultipleInputs/MultipleInputs";
import Temperature from "../Temperature/Temperature";

import './app.scss';

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <MultipleInputs/><hr/>
      <Temperature/>
   </div>
}
