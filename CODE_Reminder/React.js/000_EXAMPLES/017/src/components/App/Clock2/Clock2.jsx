import React, { useState } from 'react';

let globalIntervalId = null; // TODO: use Global Interval ID inside of component

export const Clock2 = () => {
   const [date, setDate] = useState(new Date());
   console.log('render Clock2');

   if (!globalIntervalId) {
      console.log('create globalIntervalId');
      globalIntervalId = setInterval(() => setDate(new Date()), 1000);
   }

   return (
      <Tick
         date={date.toLocaleTimeString()}
      />
   );
}

export function Tick({ date }) {
   return <h3>Time now is: {date}</h3>;
}
