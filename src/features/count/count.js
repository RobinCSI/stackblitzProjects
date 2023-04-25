import React from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {countIncrement} from './countSlice'

export default function count(){

  const buttonCountArr=useSelector(state=>state.buttonCount.value)


  return(


  )
}