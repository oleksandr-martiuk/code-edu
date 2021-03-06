import React, {useState} from "react";

const NameForm = () => {
   const [value, setValue] = useState('');

   const handleChange = e => {
      console.log(`Value changed to ${value}`);
      setValue(e.target.value);
   }

   const handleSubmit = e => {
      console.log(`Sent name ${value}`);
      e.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Name:
            <input type="text" value={value} onChange={handleChange} />
         </label>
         <input type="submit" value="Send"/>
      </form>
   );
}

export default NameForm;
