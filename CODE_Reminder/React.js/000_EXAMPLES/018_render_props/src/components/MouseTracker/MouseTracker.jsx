import React, { useState } from "react";

export const MouseTracker = () => {
   const [ coordinates, setCoordinates ] = useState({ x: 0, y: 0 });

   const handleMouseMove = (event) => {
      // console.log(event);
      setCoordinates({ x: event.clientX, y: event.clientY });
   }

   return (
      <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
         <h3>Move mouse cursor:</h3>
         <p>Текущее положение курсора мыши: ({coordinates.x}, {coordinates.y})</p>
      </div>
   );
}
