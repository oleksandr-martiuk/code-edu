import React from "react";
import './app.scss';

import File from "../File/File";

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <File/>
   </div>
}
