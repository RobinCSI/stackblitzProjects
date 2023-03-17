import React, {Fragment} from 'react'
import './askSignupLogin.css'

export default function AskSignupLogin(props){

  const handleSignUpClick =()=>{
    props.setNewUser(true)
  }

  const handleLoginClick =()=>{
    props.setNewUser(false)
  }


return(
  <div>
      {props.newUser?
        <div className="AskSignUpLogin"> 
          <div className="askQn">Already have an account? </div> 
          <div className="changeForm" onClick={handleLoginClick}> Log in</div>
        </div> : 

        <div className="AskSignUpLogin"> 
          <div className="askQn">Don't have any account? </div>
          <div className="changeForm" onClick={handleSignUpClick}> Sign Up</div>
        </div>
      
        /* <button id="signUpButton" onClick={handleSignUpClick}> Sign up</button> */
      }
      </div>
)
}