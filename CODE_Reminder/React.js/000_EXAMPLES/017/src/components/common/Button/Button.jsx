import React from 'react';

import './button.scss';

export const Button = ({ name, onClick }) => {
   return <button className={'btn'} onClick={onClick}>{ name }</button>
}
