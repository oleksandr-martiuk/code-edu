import React, {useState} from "react";

const FlavorForm = () => {
   const [value, setValue] = useState(['coconut']);

   const handleChange = e => {
      const values = Array.from(e.target.selectedOptions, item => item.value);
      console.log(values);
      setValue(values);
   }

   const handleSubmit = e => {
      console.log(`Your favourite flavour is ${value}`);
      e.preventDefault();
   }

   return (
      <form onSubmit={handleSubmit}>
         <label>
            Your favourite flavour:
            <select onChange={handleChange}  size="4" multiple>
               <option value="grapefruit">Grapefruit</option>
               <option value="lime">Lime</option>
               <option value="coconut">Coconut</option>
               <option value="mango">Mango</option>
            </select>
         </label>
         <input type="submit" value="Send"/>
      </form>
   );
}

export default FlavorForm;
