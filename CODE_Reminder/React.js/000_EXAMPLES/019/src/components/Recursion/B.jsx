import React from 'react';
import C from "./C";

export default function B({ index }) {
   console.log('B: ', index);
   return <C index={index + 1}/>
}
