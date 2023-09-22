import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  min:0,
  max:10
}

export const numberSlice = createSlice({
  name: 'number',
  initialState,
  reducers: {
    updateMin: (state, action) => {
        state.min = action.payload
    },
    updateMax: (state, action) => {
        state.max = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateMax, updateMin } = numberSlice.actions

export default numberSlice.reducer