import React, {Fragment} from 'react'
import './socialMediaLogin.css'
import AskSignupLogin from './askSignupLogin'

export default function SocialMediaLogin(props){
return(
  <Fragment>
  <p id="orHeading">or</p>
      <div id="OAuth">
        <div>Continue with Google</div>
        <div>Continue with Facebook</div>
      </div> <br/><br/>
      <AskSignupLogin newUser={props.newUser} setNewUser={props.setNewUser} />
  </Fragment>
)
}