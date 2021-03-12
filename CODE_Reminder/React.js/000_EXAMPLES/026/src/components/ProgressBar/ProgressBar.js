import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
   const [width, setWidth] = useState(10);

   const addSecond = () => {
      setTimeout(() => {
         setWidth(width + 1);
      }, 50)
   }

   useEffect(() => {
      (width < 100) && addSecond();
   }, [width]);

   return (<div style={{ backgroundColor: 'grey', height: '20px', width: `100%`, }}>
      <div style={{
   width: `${width}%`,
   backgroundColor: 'powderblue',
   height: '20px'
}}/>
   </div>);
}

export default ProgressBar;
