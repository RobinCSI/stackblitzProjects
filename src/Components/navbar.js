import React from 'react'
import {Link} from 'react-router-dom'
import styles from './navbar.module.css'

export default function Navbar(){

  return(
    <div className={styles.navbar}>
      <Link className={styles.link} to="/home">Home</Link>
      <Link className={styles.link} to="/aboutUs">About Us</Link>
      <Link className={styles.link} to="/login">Login</Link>
      <Link className={styles.link} to="/register">Register</Link>
    </div>
  )
}