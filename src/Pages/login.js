import React,{Fragment, useState} from "react";
import styles from "./login.module.css";
import Header from './../Components/header'


export default function Login() {

  const [isLoggedIn, setIsLoggedIn]=useState(true)

  function handleRegister(){
    setIsLoggedIn(false)
  }

  function handleLogin(){
    setIsLoggedIn(true)
  }

  return (
    <Fragment>
    
      <Header />
      <div className={styles.wrapper}>
      <div className={styles.container}>

      <img className={styles.image} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100px" height="100px" />
      <div className={styles.box}>
        {!isLoggedIn && <input type="email" placeholder="Email" />}<br/>
        <input type="text" placeholder="Username" /> <br/>
        <input type="password" placeholder="Password" /> <br/><br/>
        <div className={styles.registerLogin}>
          {isLoggedIn? (<p>Don't have an account? <br/>
          <button className={styles.registerBtn} onClick={handleRegister}>Register</button></p>): (<p>Have an account? <br/>
          <button className={styles.loginBtn} onClick={handleLogin}>Login</button></p>)}
          {isLoggedIn && <button>Login</button>}
          {!isLoggedIn && <button>Register</button>}
      </div>
    </div>
    </div>
    </div>
    </Fragment>
  );
}
