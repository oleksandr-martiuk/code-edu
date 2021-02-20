import React, {useState, useEffect} from 'react';

export const Timer = () => {
   const [currentCount, setCount] = useState(10);

   const timer = () => {
      setCount(currentCount - 1);
   }

   useEffect(() => {
      if (currentCount <= 0) return;
      const id = setInterval(timer, 1000);
      console.log('useEffect: ', { id });
      return () => clearInterval(id);
   }, [currentCount]);

   return <div>{currentCount}</div>;
}
