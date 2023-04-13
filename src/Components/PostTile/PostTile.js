import React, {Fragment, useState} from 'react'
// import {uuid} from 'uuid'
import { v4 as uuid } from 'uuid'

import styles from './PostTile.module.css'


export default function PostTile(){

  const [postList, setPostList]=useState([])

  async function fetchPostData(){
    const postsData=await fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json())
    setPostList(postsData)
    
  }
  // console.log(postList)

  function deletePost(deleteId){

    setPostList(postList.filter(post=>post.id!=deleteId))

  }



  return(

    <Fragment>

    <h1>Post List</h1>
    <button onClick={fetchPostData}>Fetch Posts Data</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        </thead>
        <tbody>
          {postList.map(post=><tr key={uuid()}><td>{post.id}</td><td>{post.userId}</td><td>{post.title}</td><td>{post.body}</td><td className={styles.delete} onClick={()=>deletePost(post.id)}>❌</td></tr>)}
        </tbody>
    </table>

    </Fragment>

  )
}