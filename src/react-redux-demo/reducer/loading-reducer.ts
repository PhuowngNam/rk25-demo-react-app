import {LoadingActionType} from "../action/loading-action";

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType) => {
    switch (action.type) {
        case 'SHOW':
            const newState = {
                ...state,
                isLoading: true
            }
            return newState;
        case 'HIDE':
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}