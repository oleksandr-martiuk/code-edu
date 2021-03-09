import React, {useState, useEffect} from 'react';

const Currency = ({ value, prefix, onChange }) => {
  const [currValue, setCurrValue] = useState('');

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  useEffect(() => {
    const updatedVal = (value.length) ? `${prefix} ${Math.round(+value) / 100}` : '';
    setCurrValue(updatedVal);
  }, [value]);

  return <div>
      <input type='text' onChange={ handleChange } value={value}/>
      <h3>{ currValue }</h3>
  </div>
}

export default Currency;
