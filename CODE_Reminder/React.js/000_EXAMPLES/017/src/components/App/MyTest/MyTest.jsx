import React, {useState} from "react";
import './mytest.scss';

export function MyTest({ some }) {
   const [testVar, setTestVar] = useState('VARIABLE');

   return <div>
      <strong>{testVar.toUpperCase()}</strong>: {some}
   </div>
}
