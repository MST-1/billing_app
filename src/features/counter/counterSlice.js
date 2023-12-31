import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../data/products';




export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [...PRODUCTS],
  },
  reducers: {
    increment: (state,action) => {

      state.value=[...state.value,action.payload];
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
     
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    ADD_TO_CART:(state,action)=>{
   
    // console.log(action.payload);
    state.value=[...action.payload];
     
     
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,ADD_TO_CART} = counterSlice.actions

export default counterSlice.reducer