import React, { useState, useEffect } from "react";

const TechItem = ({item, updateMyStack}) => (
   <div style={{ backgroundColor: 'pink' }}>
      <input
         type="checkbox"
         id={item.id}
         value={item.value}
         onChange={updateMyStack}
      />
      <label
         htmlFor={item.id}
         style={{
            backgroundColor: 'whitesmoke',
            margin: '2px 5px',
            cursor: 'pointer',
         }}
      >{item.name}</label>
   </div>
);

const TechStackForm = ({ stack = [] }) => {
   const [myStack, setMyStack] = useState([]);

   const updateMyStack = e => {
      const { value } = e.target;
      let updatedStack = [];

      if (myStack.includes(value)) {
         updatedStack = myStack.filter(item => item !== value);
      } else {
         updatedStack = [...myStack, value];
      }

      setMyStack(updatedStack)
   }

   useEffect(() => {
      console.log('useEffect: ', myStack);
   }, [myStack]);

   const handleSubmit = e => {
      e.preventDefault();
      alert(myStack.length
         ? `Your favourite stack of technologies are: ${myStack.join(', ')}`
         : 'Yo, man! Choose something!'
      );
   }

   return (
      <form onSubmit={handleSubmit}>
         <h3>Stack of technologies:</h3>
         <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
               stack && stack.map(technology =>
                  <TechItem
                     key={technology.id}
                     item={technology}
                     updateMyStack={updateMyStack}
                  />)
            }
         </div>
         <input
            type="submit"
            value="Send"
            style={{
               margin: '5px 0',
               cursor: 'pointer',
            }}
         />
      </form>
   );
}

export default TechStackForm;
