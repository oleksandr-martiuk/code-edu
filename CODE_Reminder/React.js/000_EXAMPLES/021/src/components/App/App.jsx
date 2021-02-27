import React from "react";
import './app.scss';
import People from "../People/People";

const people = [
   { id: 1, fName: 'Joe', sName: 'Regan', age: 58, occupation: 'Top-manager' },
   { id: 2, fName: 'Angela', sName: 'Smith', age: 41, occupation: 'Bookkeeper' },
   { id: 3, fName: 'Martin', sName: 'Thompson', age: 32, occupation: 'Seller' },
   { id: 4, fName: 'Igor', sName: 'Radish', age: 25, occupation: 'Software Engineer' },
   { id: 5, fName: 'Jon', sName: 'Smith', age: 33, occupation: 'Engineering Lead' },
]

export function App({title}) {
   return <div>
      <h1>{title}</h1><hr/>
      <People people={people}/><hr/>
   </div>
}
