import React, {useState} from "react";

const EssayForm = () => {
   const [value, setValue] = useState('Please write several lines about your DOM-element');

   const handleChange = e => {
      console.log(`Value changed to ${value}`);
      setValue(e.target.value);
   }

   const handleSubmit = e => {
      console.log(`Essay sent: ${value}`);
      e.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Essay:
            <textarea value={value} onChange={handleChange} />
         </label>
         <input type="submit" value="Send"/>
      </form>
   );
}

export default EssayForm;
