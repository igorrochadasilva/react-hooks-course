import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

//aqui mostramos o username que pegamos do AppContext
function User() {
  const { username } = useContext(AppContext);  
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
}

export default User;
