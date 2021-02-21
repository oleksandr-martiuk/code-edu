import React from "react";

const getData = () => ({
   person: {
      name: 'Bill',
      occupation: 'Software Engineer'
   }
});

export default function DataProvider (props) {
   const data = getData();
   return <>{ props.render(data) }</>;
}
