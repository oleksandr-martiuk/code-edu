import React from "react";
import './app.scss';

import People from "../People/People";

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <People/>
   </div>
}
