import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        count:0
    },
    {
        id:2,
        count:0
    }

]

const countersSlice = createSlice({
    name:"counters",
    initialState,
    reducers:{
        increment:(state,action)=>{
            const index = state.findIndex((counter) => counter.id === action.payload);
            state[index].count++;
        },
        decrement:(state,action)=>{
          const index = state.findIndex((counter) => counter.id === action.payload);
          state[index].count--;  
        }
    }

});

export default countersSlice.reducer;
export const {increment,decrement} = countersSlice.actions;