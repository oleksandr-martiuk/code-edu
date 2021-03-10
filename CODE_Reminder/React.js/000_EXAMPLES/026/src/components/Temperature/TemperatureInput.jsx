import React, { useState, useEffect } from 'react';

const TemperatureInput = ({ scale, temperature, onChange, onConvert }) => {
   const [inputTem, setInputTemp] = useState(temperature);
   console.log('Input ---> getFahrenheitDegree ---> ', { inputTem });

   const handleChange = (e) => {
      console.log('Input ---> handleChange ---> ', { valueAsNumber: e.target.valueAsNumber });
      onChange(e.target.valueAsNumber);
   }

   useEffect(() => {
      const updatedValue = onConvert(temperature);
      console.log('Input ---> useEffect ---> ', { temperature, updatedValue });
      setInputTemp(updatedValue);
   }, [temperature]);

   return (
      <fieldset>
         <legend>Enter temperature in degrees{` (${scale})`}:</legend>
         <input type="number" value={inputTem} onChange={handleChange} />
      </fieldset>
   );
}

export default TemperatureInput;
