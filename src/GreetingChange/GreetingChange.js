import React, { Fragment, useState } from 'react';

export default function GreetingChange() {

  const greeting=["Hi","Hello","Good morning","Good evening","Good night","Have a good day"]
  const l=greeting.length
  const [currentIndex, setCurrentIndex]=useState(0)
  function changeGreeting(){
    setCurrentIndex((currentIndex+1)%l)
  }

  return(
    <Fragment>
    <button onClick={changeGreeting}>Click to change greeting</button>
    <h1>{greeting[currentIndex]}</h1>
    </Fragment>

  )


}