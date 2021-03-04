import React from "react";
import './app.scss';
import MyLink from "../MyLink/MyLink";

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <MyLink name='My Link'/>
   </div>;
}
