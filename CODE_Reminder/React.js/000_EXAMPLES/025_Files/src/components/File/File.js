import React from 'react';

const File = () => {
   const handleClick = (e) => {
      e.stopPropagation();
      console.log(e);
   }

   return <button onClick={handleClick} value={'yo'}>Button</button>
}

export default File;
