import React, { useState } from "react";

const UserGreeting = () => <h2 style={{ color: 'green' }}>Welcome home my Friend!</h2>;
const GuestGreeting = () => <h2 style={{ color: 'pink' }}>Nice to meet you newcomer!</h2>;

const LogInButton = ({handleClick}) => <button style={{ cursor: 'pointer' }} onClick={() => handleClick()}>LogIn</button>;
const LogOutButton = ({handleClick}) => <button style={{ cursor: 'pointer' }} onClick={() => handleClick()}>LogOut</button>;

export const Greeting = ({ isLoggedIn }) => {
   if (isLoggedIn) {
      return <UserGreeting/>;
   } else {
      return <GuestGreeting/>;
   }
}

//----------------------------------------------------------------------------------------------------------------------

const LoginControl = () => {
   const [isLoggedIn, setLoggedIn] = useState(false);

   const handleLoginClick = () => {
      setLoggedIn(true);
   }

   const handleLogoutClick = () => {
      setLoggedIn(false);
   }

   const getButton = () => (isLoggedIn
      ? <LogOutButton handleClick={handleLogoutClick}/>
      : <LogInButton handleClick={handleLoginClick}/>
   );

   return (<>
      <Greeting isLoggedIn={isLoggedIn}/>
      {getButton()}
   </>);
}

export default LoginControl;
