import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {accountReducer} from "./reducer/account-reducer";
import {loadingReducer} from "./reducer/loading-reducer";

const store = createStore(
    combineReducers({
        accountReducer: accountReducer,
        loadingReducer: loadingReducer
    }),
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__({trace: true})
    ),
);

export default store;
