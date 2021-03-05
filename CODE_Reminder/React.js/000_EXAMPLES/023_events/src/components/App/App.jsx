import React from "react";
import './app.scss';
import MyLink from "../MyLink/MyLink";
import Toggle from "../Toggle/Toggle";
import LoginControl from "../Login/Login";

export function App({title}) {
   return <div>
      <h1>{title}</h1><hr/>
      <MyLink name='My Link'/><hr/>
      <Toggle /><hr/>
      <LoginControl/>
   </div>;
}
