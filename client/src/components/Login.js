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