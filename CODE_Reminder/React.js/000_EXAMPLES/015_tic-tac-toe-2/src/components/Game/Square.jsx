import * as React from "react";

export default function({value, onClick}) {
   return (
      <button className="square" onClick={() => onClick()}>
         { value }
      </button>
   );
}
