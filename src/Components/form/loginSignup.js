import React, {Fragment, useState} from 'react'
import Heading from './heading'
import './loginSignup.css'


import './loginSignup.css'

export default function LoginSignup(){

  const [newUser, setNewUser]=useState(false)

  

  return(
    <div id="MainContainer">
      <Heading newUser={newUser} setNewUser={setNewUser}/>
    </div>
  )
}

