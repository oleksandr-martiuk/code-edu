import React from "react";
import './app.scss';
import { DataProvider } from "../DataProvider";
import {MouseTracker} from "../MouseTracker/MouseTracker";
import {DataProvider2} from "../DataProvider2";

const renderProvider = ({ person }) => {
   const greetings = person && `${person.name} (${person.occupation})`;
   return(<h3>Hello dear {greetings || 'friend'}!</h3>);
}

const renderProvider2 = ({ name }) => {
   return <>Hello (#2) <strong>{name}</strong>. Nice to meet you!</>;
}

export function App() {
   return <div>
      <h1>Hello Friend!</h1>

      <DataProvider render={renderProvider}/><hr/>
      <DataProvider2>{ renderProvider2 }</DataProvider2><hr/>

      <MouseTracker/>
   </div>
}
