import React from "react";
import './app.scss';

import NameForm from "../Forms/NameForm/NameForm";
import EssayForm from "../Forms/EssayForm/EssayForm";
import FlavorForm from "../Forms/FlavorForm/FlavorForm";
import TechStackForm from "../Forms/TechStackForm/TechStackForm";
import File from "../File/File";

const defaultValues = [
   {id: 'technology-0', name: 'Node.js', value: 'node' },
   {id: 'technology-1', name: 'React.js', value: 'react' },
   {id: 'technology-2', name: 'PostgreSQL', value: 'sql' },
   {id: 'technology-3', name: 'AWS', value: 'aws' },
]

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <NameForm/><hr/>
      <EssayForm/><hr/>
      <FlavorForm/><hr/>
      <TechStackForm stack={defaultValues}/><hr/>
      <File/>
   </div>
}
