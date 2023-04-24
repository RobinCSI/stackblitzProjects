import React from 'react'

import styles from './Counter.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, reset} from './counterSlice'

export default function Counter(){
  const count=useSelector((state)=>state.counter.value) //read data from the store
  const dispatch=useDispatch() //read dispatch actions

  return(
    <div className={styles.counterContainer}>
      <h1>Count : {count}</h1>
      <div>
      <button className={styles.buttons} style={{backgroundColor:"green"}} onClick={()=>dispatch(increment())}>Increment</button>
      <button className={styles.buttons} style={{backgroundColor:"red"}} onClick={()=>dispatch(decrement())}>Decrement</button>
      <button className={styles.buttons} style={{backgroundColor:"blue"}} onClick={()=>dispatch(reset())}>Reset counter</button>
      {/* <button onClick={()=>dispatch(incrementByAmount())}>Reset counter</button> */}
      </div>

    </div>
  )
}