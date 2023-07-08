import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './log.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <div className="log_body">

    <div className="log_data">  <h1> Login Please to enter the shopMe Store </h1>

<button onClick={() => loginWithRedirect()}>Log In</button>    </div>
    





  </div>
  
  
  
  
  )
  ;
};

export default LoginButton;