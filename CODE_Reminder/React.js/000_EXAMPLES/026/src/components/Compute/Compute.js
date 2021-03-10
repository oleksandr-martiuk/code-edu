import React, { useState, useCallback, useMemo } from 'react';

const neverChange = 'I never change';
const oneSecond = 1000;

let lastComputedCallback;

function Compute() {
   const [second, setSecond] = useState(0);

   // This  is not expensive, and it will execute every render, this is fine, creating a function every render is about
   // as cheap as setting a variable to true every render.
   const computedCallback = useCallback(() => expensiveCalc('useCallback'), [
      neverChange,
      second // uncomment this to make it return a new callback every second
   ]);


   if (computedCallback !== lastComputedCallback) {
      lastComputedCallback = computedCallback
      // This  executes everytime computedCallback is changed. Running this callback is expensive, that is true.
      computedCallback();
   }
   // This  executes once
   const computedMemo = useMemo(() => expensiveCalc('useMemo'), [neverChange, second]);

   setTimeout(() => setSecond(second + 1), oneSecond);

   return `
       useCallback: ${expensiveCalcExecutedTimes.useCallback} times |
       useMemo: ${computedMemo} |
       App lifetime: ${second}sec.
  `;
}

const tenThousand = 10 * 1000;
let expensiveCalcExecutedTimes = { 'useCallback': 0, 'useMemo': 0 };

function expensiveCalc(hook) {
   console.log(hook);
   let i = 0;
   while (i < 10000) i++;

   return ++expensiveCalcExecutedTimes[hook];
}

export default Compute;
