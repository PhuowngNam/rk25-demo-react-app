import {createAction, createReducer, createSlice} from "@reduxjs/toolkit";
import {createStore} from "redux";

// export const increment = createAction("INCREMENT", (num) => {
//     return {
//         payload: num
//     }
// });
// export const decrement = createAction("DECREMENT", (num) => {
//     return {
//         payload: num
//     }
// });
//
// export const counterReducer = createReducer(0, (builder) => {
//     builder.addCase(increment, (state,action) => state + action.payload)
//     builder.addCase(decrement, (state, action) => state - action.payload)
// })

//createSlice
export const counterSlice = createSlice({
    name: 'test-counter',
    extraReducers: undefined,
    initialState: 0,
    reducers: {
        increment: (state,action) => state + action.payload,
        decrement: (state,action) => state - action.payload,
    }
})

export const {actions, reducer} = counterSlice;
export const {increment, decrement} = actions;
