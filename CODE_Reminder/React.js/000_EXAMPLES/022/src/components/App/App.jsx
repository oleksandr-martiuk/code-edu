import React from "react";
import './app.scss';

import MyComponent from "../MyComponent/MyComponent";
import {MyCounter} from "../Counter/Counter";

export function App() {
   return (<div>
      <MyComponent/><hr/>
      <MyCounter/><hr/>
      <MyCounter/><hr/>
      <MyCounter/><hr/>
   </div>);
}
