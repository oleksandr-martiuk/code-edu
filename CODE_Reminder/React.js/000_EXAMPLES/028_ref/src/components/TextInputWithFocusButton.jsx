import React, { useRef } from 'react';

export default function TextInputWithFocusButton() {
   const inputE1 = useRef(null);

   const onButtonClick = () => {
      // 'current' points to the mounted element 'input'
      inputE1.current.focus();
   }

   return (<>
      <input ref={inputE1} type="text"/>
      <button onClick={onButtonClick}>Put Focus() to the input field</button>
   </>);
}
