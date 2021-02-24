import React from 'react';
import B from "./B";

export default function A({ index }) {
   console.log('A: ', index);
   return <B index={index + 1}/>
}
