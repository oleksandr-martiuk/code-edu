import React, {useEffect, useState} from 'react';

// ProgressBar By setInterval

export const ProgressBar1 = () => {
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      if (progress < 100) {
         const id = setInterval(() => {
            clearInterval(id);
            setProgress(progress + 1);
         }, 50)
      }
   }, [progress])

   return (<div style={{ width: '50%' }}>
      <div style={{
         backgroundColor: '#0088d0',
         height: '10px',
         width: progress + '%',
      }}/>
   </div>);
}
