import React from "react";
import './app.scss';

import People from "../People/People";
import A from "../Recursion/A"; // TODO: don't do it :)

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <People/>
      {/*Recursion: <A index={0}/>*/}
   </div>
}
