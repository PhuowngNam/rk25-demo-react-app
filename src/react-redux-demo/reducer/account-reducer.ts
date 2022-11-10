import {AccountActionType} from "../action/account-acction";

const initState = {
    data: []
}

export const accountReducer = (state = initState, action: AccountActionType) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}