import React from "react";
import FancyBorder from "../FancyBorder/FancyBorder";

function Dialog({ title, message }) {
   return (
      <FancyBorder color="blue">
         <h1 className="Dialog-title">
            {title}
         </h1>
         <p className="Dialog-message">
            {message}
         </p>
      </FancyBorder>
   );
}

function WelcomeDialog() {
   return (
      <Dialog
         title="Добро пожаловать"
         message="Спасибо, что посетили наш космический корабль!" />
   );
}
export default WelcomeDialog;
