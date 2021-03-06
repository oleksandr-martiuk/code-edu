import React from "react";
import './app.scss';

import MyComponent from "../MyComponent/MyComponent";
import {MyCounter} from "../Counter/Counter";
import MultipleNumbers from "../MultipleNumbers/MultipleNumbers";

export function App() {
   return (<div>
      <MyComponent/><hr/>

      <MyCounter/><hr/>
      <MyCounter/><hr/>
      <MyCounter/><hr/>

      <MultipleNumbers numbers={[1, 5, 12, 25]}/><hr/>
   </div>);
}
