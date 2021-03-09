import React, { useState } from "react";
import Currency from '../Currency/Currency';

export function App() {
   const [value, setValue] = useState('');

   const handleChange = curVal => {
      !isNaN(curVal)
         && Number.isInteger(+curVal)
         && +curVal >= 0
         && setValue(curVal);
   }

   return (
      <Currency
         value={value}
         prefix={'$'}
         onChange={handleChange}
      />
   );
}
