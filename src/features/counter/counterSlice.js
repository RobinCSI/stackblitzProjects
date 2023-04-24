import React from 'react'

import {createSlice} from '@reduxjs/toolkit'

const initialState={
  value:0
}

export const counterSlice=createSlice({
  name:'counter', 
  initialState,
  reducers:{ //one or more reducer functions to define how the state can be updated
    increment:(state)=>{
      state.value+=1
    }, 
    decrement: (state)=>{
      state.value-=1
    }, 
    incrementByAmount:(state, action)=>{
      state.value+=action.payload
    },
    reset: (state)=>{
      state.value=0
    }
  }
})

export const {increment, decrement, incrementByAmount, reset}=counterSlice.actions //generated Redux action creators

export default counterSlice.reducer //reducer function for the whole slice
