import React, {Fragment} from "react";
import styles from "./home.module.css";
import {Link} from 'react-router-dom'
import Header from './Components/header'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <h1>Hello, Welcome!</h1>
      <p>Sign up or login to our social media website</p>
    </Fragment>
  );
}
