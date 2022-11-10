import {CounterActionType} from "../action/counter-action";

const initState = {
    counter: 10
}

export const counterReducer = (state = initState, action: CounterActionType) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case 'DECREASE':
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
}