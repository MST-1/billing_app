
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Home } from './components/Home/Home.js';
import LoginButton from './components/logout/LoginButton.js'

function App() {

  
  const {loginWithRedirect, isAuthenticated,user} = useAuth0();
  function authCheck(){
   if(isAuthenticated){
    console.log("yes",user,isAuthenticated)
    return <Home/>;
   }
   else{
    console.log("NO");
    return <LoginButton/>
    
    
   }

  }

  return (<div>
    {authCheck()}
    
   
   </div>
  );
}

export default App;
