import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./reducer/counter-reducer";
import {bookListReducer} from "./reducer/book-reducer";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({
        counterReducer: counterReducer,
        bookListReducer: bookListReducer
    }),
    applyMiddleware(thunk)
);
export default store;