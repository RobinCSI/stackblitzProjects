import React, { Fragment, useState } from 'react';
import styles from './EventLog.module.css'
import './style.css';

export default function EventLog() {

  const [events,setEvents]=useState([{}])

  function handleIn(e){
    // let text = event.target.nodeName;
    // console.log(e.target)
    // document.getElementById("demo").innerHTML = text;
    setEvents([...events, {element: e.target.tagName, time: Date(), eventName: "in"}])
    // console.log(events)
  }
  
  function handleOut(e){
    setEvents([...events, {element: e.target.tagName, time: Date(), eventName: "out"}])

  }

  return(
    <Fragment>
      <div className={styles.htmlElements}>
    <h1 onMouseOver={handleIn} onMouseOut={handleOut}>This is h1</h1>
    <h2 onMouseOver={handleIn} onMouseOut={handleOut}>This is h2</h2>
    <div onMouseOver={handleIn} onMouseOut={handleOut}>This is div</div>
    </div>
    <h1>Event log Table of hovering on above HTML elements</h1>
    <table>
        <tr>
          <th>Element</th>
          <th>Time</th>
          <th>Event Name</th>
        </tr>
        
          {events.map(ele=><tr><td>{ele.element}</td><td>{ele.time}</td><td>{ele.eventName}</td></tr>)}
          {/* <td>Anom</td>
          <td>19</td>
          <td>Male</td> */}
        {/* </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr> */}
      </table>
    </Fragment>

  )

}