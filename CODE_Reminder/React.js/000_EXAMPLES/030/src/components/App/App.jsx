import React from "react";
import './app.scss';

import Button from "../Button/Button";

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <Button/>
   </div>
}
