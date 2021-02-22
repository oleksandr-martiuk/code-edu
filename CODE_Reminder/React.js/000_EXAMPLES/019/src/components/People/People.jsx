import React, {useState} from 'react';
import {Person} from "../Person/Person";

const data = [
   { name: 'Bill', occupation: 'Software Engineer' },
   { name: 'Jim', occupation: 'MakeUp' },
   { name: 'Tom', occupation: 'Seller' },
]

export default function People() {
   const [people, setPeople] = useState(data);
   return <>{
      people.map(({name, occupation}, index) => (
         <Person key={index} index={++index} name={name} occupation={occupation}/>
      ))
   }</>
}
