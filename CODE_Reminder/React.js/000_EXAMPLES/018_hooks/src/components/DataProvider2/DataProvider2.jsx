import React from "react";

export const DataProvider2 = ({ children }) => {
   return <>{ children && children({ name: 'Noah' }) }</>;
}
