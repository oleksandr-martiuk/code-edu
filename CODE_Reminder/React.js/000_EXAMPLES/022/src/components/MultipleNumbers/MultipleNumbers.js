import React from 'react';

const Number = ({ num }) => {
   const blockStyle = {
      width: '100px',
      margin: '2px 10px',
      padding: '20px',
      border: '1px solid black',
      borderRadius: '5px',
      color: 'whitesmoke',
      backgroundColor: '#00b7ff',
      fontSize: '25px',
      textAlign: 'center',
   }
   return <div style={blockStyle}><strong>{ num * 10 }</strong></div>;
}

const MultipleNumbers = ({ numbers=[] }) => {
   const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
   };
   return (
      <div style={containerStyle}>
         {
            numbers?.length && numbers.map((number, index) => <Number num={number} key={index}/>)
         }
      </div>
   );
}

export default MultipleNumbers;
