import {combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer/counter-reducer";
import {bookListReducer} from "./reducer/book-reducer";

const store = createStore(
    combineReducers({
        counterReducer: counterReducer,
        bookListReducer: bookListReducer
    })
);
export default store;