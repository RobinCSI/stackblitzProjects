import React, {Fragment} from 'react'
import './heading.css'
import Form from './form'


export default function Heading(props){

return(
  <Fragment>
  <h1>Welcome!</h1>
  <div id="heading2">
  {props.newUser? <p>Sign up for new account</p>:<p> Log in to your account</p>}
  </div>
  <Form newUser={props.newUser} setNewUser={props.setNewUser} />
  </Fragment>
)
}