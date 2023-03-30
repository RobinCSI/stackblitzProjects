import React, {useState, useRef} from "react";
import styles from "./App.module.css";


export default function App() {

  const [val, setVal]=useState()
  const [lucky, setLucky]=useState(luckyNum())
  const count=useRef(0)

  function luckyNum(){
    const lucky=Math.floor(Math.random()*100)
    return (lucky)
  }

  const handleChange=(event)=>{
    setVal(event.target.value)
  }

  const handleClick=()=>{
    count.current+=1
    // console.log(lucky)
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
      setLucky(luckyNum()) //Lucky number gets changed only when a user guesses it correctly
    }
  }
  return (
    <div className={styles.container}>
      <div>Guess a number between 0 and 100 to try your luck : </div>
      <input value ={val} onChange={handleChange} placeholder="Guess lucky number .." />
      <button className={styles.btn} onClick={handleClick}>Match Number</button>
    </div>
  );
}
