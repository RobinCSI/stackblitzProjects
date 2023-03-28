import React from "react";
import {Fragment} from 'react'
import styles from "./aboutUs.module.css";
import Header from './../Components/header'


export default function AboutUs() {
  const details=["skills", "hobbies", "learnings"]
  return (
    <Fragment>
      <Header />
      <h1 className={styles.heading}>About Us</h1>
      <div className={styles.picIntro}>
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="20%" height="20%" />
      <p id={styles.intro}>Robin Sharma <br/>
       I am a Civil engineer from Agra. I am excited about becoming a Full Stack developer.</p>
      </div>
      <div className={styles.details}>
        {details.map(item=>(
          <div className={styles.box}>
          <p>What are your {item}?<br/>
           My {item} are Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>

        ))}

        {/* <div className="box1">
          <p>What are</p> */}
      </div>
    </Fragment>
  );
}
