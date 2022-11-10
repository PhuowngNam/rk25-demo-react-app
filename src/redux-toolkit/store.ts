import {configureStore} from "@reduxjs/toolkit";
import {counterSlice, reducer} from "./counter-reducer";
// import {counterReducer} from "./counter-reducer";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store;