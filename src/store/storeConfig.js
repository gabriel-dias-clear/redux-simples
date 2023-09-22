import { configureStore } from '@reduxjs/toolkit'
import numberReducer from './action/numberReducer'

export default configureStore({
  reducer: {
    number: numberReducer
  },
})