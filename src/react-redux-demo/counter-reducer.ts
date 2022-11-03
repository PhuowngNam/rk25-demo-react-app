import {CounterActionType} from "./counter-action";

const initState = {
    counter: 10
}

export const counterReducer = (state = initState, action: CounterActionType) => {
    switch (action.type) {
        case 'INCREASE':
            const newState = {
                ...state,
                counter: state.counter + action.payload
            }
            return newState;
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
}