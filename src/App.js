import React, {useState, useRef} from "react";
import styles from "./App.module.css";

export default function App() {

  const [val, setVal]=useState()
  const count=useRef(0)
  const lucky=100

  const handleChange=(event)=>{
    setVal(event.target.value)
  }

  const handleClick=()=>{
    count.current+=1
    if(val<lucky){
      alert("You guessed a smaller number")
      setVal('')
    }
    else if (val>lucky){
      alert("You guessed a bigger number")
      setVal('')
    }
    else if(val==lucky){
      alert("Congratulations! You guessed the right number in "+count.current+ " attempts")
      setVal('')
      count.current=0
    }
  }
  return (
    <div className={styles.container}>
      <input value ={val} onChange={handleChange} placeholder="Guess lucky number ..." />
      <button className={styles.btn} onClick={handleClick}>Match Number</button>
    </div>
  );
}
