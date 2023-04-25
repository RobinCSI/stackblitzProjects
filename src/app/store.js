import React from 'react'
import countReducer from '../features/count/countSlice'

import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({
  reducer:{
    count: countReducer
  }
})
