import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

//aqui alteramos o valor d userName do contexto AppContext
function Login() {
  const { setUsername } = useContext(AppContext);
  const context = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          console.log("evento de click e alterar nome")          
          context.setUsername(event.target.value);
          console.log(AppContext)
          console.log(context)
        }}
      />
    </div>
  );
}

export default Login;
