import { createSlice } from "@reduxjs/toolkit";
 
export const mySlice = createSlice({
    name : "showData",
    initialState : {value : 0},
    reducers: {
         increment : (state)=> {
            state.value += 1;
         },
         decrement : (state)=> {
            state.value -= 1;
            if (state.value === 0) {
               state.value = 1 
            }
         },
         showData: (state) =>{
            state.value; 
         }
    }
})

export const { increment ,  decrement} = mySlice.actions
export default mySlice.reducer;