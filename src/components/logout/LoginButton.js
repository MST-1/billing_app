import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import wall from '../../assets/facebook_profile_image.png'
import './log.css'

const LoginButton = () => {
  const { loginWithRedirect ,user} = useAuth0();

 

  return (
  <div className="log_body">
   

    <div className="log_data">
        <img src={wall}alt="" />
        <h1> Login Please to enter the shopMe Store </h1>

<button onClick={() => loginWithRedirect()} className="bt">Log In</button>    </div>
    





  </div>
  
  
  
  
  )
  ;
};

export default LoginButton;