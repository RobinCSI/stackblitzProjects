import React, {Fragment} from 'react'

export default function PostTile(){

  fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json()).then(data=>console.log(data))



  return(

    <Fragment>

    <h1>Post List</h1>
    <table>
        <tr>
          <th>Element</th>
          <th>Time</th>
          <th>Event Name</th>
        </tr>
    </table>

    </Fragment>

  )
}