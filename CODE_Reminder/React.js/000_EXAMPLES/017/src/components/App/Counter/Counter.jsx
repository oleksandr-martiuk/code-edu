import React, {useState} from "react";
import './counter.scss';

export function MyCounter() {
   const [counter, setCounter] = useState(0);

   const increase = () => {
      console.log('increase');
      setCounter(counter + 1);
   }
   const decrease = () => {
      console.log('decrease');
      setCounter(counter - 1);
   }

   return <>
      <h4>{counter}</h4>

      <button onClick={increase} className={'greenBtn'}>{'Increase'}</button>
      <button onClick={decrease} className={'redBtn'}>{'Decrease'}</button>
   </>
}
