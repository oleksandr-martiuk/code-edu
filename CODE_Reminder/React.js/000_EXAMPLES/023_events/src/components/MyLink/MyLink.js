import React from 'react';

const MyLink = ({ name }) => {
   const handleClick = (e) => {
      e.preventDefault();
      alert('Link has been clicked');
   }
   return (<>
      <a onClick={ handleClick }>{name}</a>
   </>);
}

export default MyLink;
