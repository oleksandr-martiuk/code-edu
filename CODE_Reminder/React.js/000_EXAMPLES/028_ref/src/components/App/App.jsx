import React from "react";
import './app.scss';

import AutoFocusTextInput from "../AutoFocusTextInput";
import TextInputWithFocusButton from "../TextInputWithFocusButton";
import CustomTextInput2 from "../CustomTextInput2";

export function App({title}) {
   return <div>
      <h1>{title}</h1>
      <AutoFocusTextInput/><hr/>
      <TextInputWithFocusButton/><hr/>
      <CustomTextInput2/><hr/>
   </div>
}
