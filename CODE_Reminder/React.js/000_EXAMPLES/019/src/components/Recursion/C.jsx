import React from 'react';
import A from "./A";

export default function C({ index }) {
   console.log('C: ', index);
   return <A index={index + 1}/>
}
