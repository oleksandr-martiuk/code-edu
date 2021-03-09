import React, {useState, useEffect} from 'react';

const scaleNames = {
   c: 'Celsius',
   f: 'Fahrenheit'
};

const toCelsius = fahrenheit => {
   const result = (fahrenheit - 32) * 5 / 9;
   console.log('Converter --> toCelsius ---> ', { fahrenheit, result });
   return result;
}
const toFahrenheit = celsius => {
   const result = (celsius * 9 / 5) + 32;
   console.log('Converter --> toFahrenheit ---> ', { celsius, result });
   return result;
}

function tryConvert(temperature, convert) {
   const input = parseFloat(temperature);
   if (Number.isNaN(input)) {
      return '';
   }
   const output = convert(input);
   const rounded = Math.round(output * 1000) / 1000;
   return rounded.toString();
}

function BoilingVerdict(props) {
   return (props.celsius >= 100)
      ? (<p>The water would boil.</p>)
      : (<p>The water would not boil.</p>);
}

const TemperatureInput = ({ onTemperatureChange, temperature, scale }) => {
   const handleChange = (e) => {
      onTemperatureChange(e.target.value);
   }

   return (
      <fieldset>
         <legend>Enter temperature in {scaleNames[scale]}:</legend>
         <input
            value={temperature}
            onChange={handleChange}
         />
      </fieldset>
   );
}

const Temperature = () => {
   const [temperature, setTemperature] = useState('');
   const [scale, setScale] = useState('c');
   const [celsius, setCelsius] = useState('');
   const [fahrenheit, setFahrenheit] = useState('');

   const handleCelsiusChange = temperatureValue => {
      setTemperature(temperatureValue);
      setScale('c');
   }

   const handleFahrenheitChange = (temperatureValue) => {
      setTemperature(temperatureValue);
      setScale('f');
   }

   useEffect(() => {
      const newCelsius = scale === 'f' ? tryConvert(+temperature, toCelsius) : +temperature;
      const newFahrenheit = scale === 'c' ? tryConvert(+temperature, toFahrenheit) : +temperature;
      setCelsius(newCelsius);
      setFahrenheit(newFahrenheit);
      console.log({ scale, temperature, newCelsius, newFahrenheit })
   }, [temperature])

   return (
      <div>
         <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={handleCelsiusChange} />
         <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={handleFahrenheitChange} />
         <BoilingVerdict
            celsius={parseFloat(celsius)} />
      </div>
   );
}

export default Temperature;
