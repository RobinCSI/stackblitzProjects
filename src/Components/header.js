import React, {Fragment} from "react";
import styles from "./header.module.css";
import {Link} from 'react-router-dom'

export default function Header(){
  return(
<div className={styles.wrapper}>
    <div className={styles.header}>
      <Link className={styles.link} to={"/"}>Home</Link>
      <Link className={styles.link} to={"/aboutUs"}>About Us</Link>
      <Link className={styles.link} to={"/login"}>Log in</Link>
    </div>
    </div>
  )
}