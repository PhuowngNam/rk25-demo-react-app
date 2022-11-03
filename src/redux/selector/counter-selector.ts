import store from "../redux-app";

const counterSelector = () => {
    return store.getState().counterReducer.counter;
}

export default counterSelector;