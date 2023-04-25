import React from 'react'

import {createSlice, } from '@reduxjs/toolkit'


const initialState={
  value: (new Array(30)).map((element, index)=>{ButtonNo: index, count: 0})
  // for(let i=1;i<=30;i++){
  //   arr[i-1]={ButtonNo: i, count: 0}
  
}

export const countSlice=createSlice({
  name:"buttonCount",
  initialState,
  reducers:{
    incrementCount: (state, action)=>{
      state.value[action.payload].count++
    }
  }
})

export const {incrementCount}=countSlice.actions
export default countSlice.reducer