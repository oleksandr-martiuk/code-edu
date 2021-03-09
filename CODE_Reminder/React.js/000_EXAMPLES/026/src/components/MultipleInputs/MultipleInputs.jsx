import React, { useState, useEffect } from 'react';
import './styles.scss';

const MultipleInputs = () => {
   const [mValues, setMultiValues] = useState([333, 555, 13579]);
   const handleMultipleChanges = (value, index) => {
      const updatedValues = mValues.map((item, itemId) => (index === itemId ? value : item));
      setMultiValues(updatedValues);
   }

   return <div>
      <Input value={mValues} index={0} onChange={handleMultipleChanges} prefix="$"/>
      <Input value={mValues} index={1} onChange={handleMultipleChanges} prefix="€"/>
      <Input value={mValues} index={2} onChange={handleMultipleChanges} prefix="£"/>
   </div>
}

const Input = ({ value, index, onChange, prefix }) => {
   const handleChange = e => {
      console.log(e);
      onChange(e.target.valueAsNumber, index);
   }

   return (<div style={{ margin: '5px 0'}}>
      <input type='number' value={value[index]} onChange={handleChange}/>{prefix} {value[index]}
   </div>);
}

export default MultipleInputs;
