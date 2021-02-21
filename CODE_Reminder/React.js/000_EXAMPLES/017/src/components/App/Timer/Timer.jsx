import React, {useState, useEffect} from 'react';

export const Timer = () => {
   const [currentCount, setCount] = useState(10);
   console.log('render Timer')

   const timer = () => {
      setCount(currentCount - 1);
   }

   useEffect(() => {
      if (currentCount <= 0) return;
      const id = setInterval(timer, 1000);
      return () => clearInterval(id);
   }, [currentCount]);

   return <div>
      <strong>Timer</strong>: {currentCount}
   </div>;
}
