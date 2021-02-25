import React, {useState, useEffect} from 'react';

const getColor = (name) => ({ '#0088d0': '#0069a0', '#0069a0': '#0088d0' }[name]);

export const ProgressBar = () => {
   const [progress, setProgress] = useState(0);
   const [color, setColor] = useState('#0088d0');

   useEffect(() => {
      if (progress < 100) {
         setTimeout(() => {
            setProgress(progress + 1);
            setColor(getColor(color));
         }, 50)
      }
   }, [progress])

   return (<div style={{ width: '50%' }}>
      <div style={{
         backgroundColor: color,
         height: '10px',
         width: progress + '%',
      }}/>
   </div>);
}
