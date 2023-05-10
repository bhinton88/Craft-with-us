import LoginForm from "./LoginForm"
import SignUpForm from "./SignUpform"
import Button from 'react-bootstrap/Button';
import { useState } from "react";


function Login () {

  const [loginToggle, setLoginToggle] = useState(true)

  function onClick(){
    setLoginToggle(loginToggle => !loginToggle)
  }

  return (
    <div className="login">
        <img 
          src={require("../images/ball-of-yarn-gc8a10f1ad_640.png")}
          id="loginImage"
          alt="yarn ball"
          />
        <div id="infoSection">
          <h1>Craft with us!</h1>
          <p>A place to check out and enroll in fun craft workshops!</p>
        </div>
      {loginToggle? 
        <div className="signInContainer">
          <LoginForm /> 
          <p>Dont have an account? Sign up for one!</p>
          <Button variant="primary" onClick={onClick}>Sign Up</Button>
        </div>
        : 
        <div className="signInContainer">
          <SignUpForm />
          <p>Already have an account? Click below</p>
          <Button variant="primary" onClick={onClick}>Login with account</Button>
        </div>
      }
    </div>

  )


}

export default Login