import {accountService} from "../../service/account.service";
import {hideLoading, showLoading} from "./loading-action";

export type AccountActionType = {
    type: string,
    payload: any[]
}

export const addAccountToList = (accountList: any[]): AccountActionType => {
    return {
        type: 'ADD',
        payload: accountList
    }
}

// middleware
export const addAccountToListAsync = () => {

    // thunk func
    return async (dispatch: any) => {
        dispatch(showLoading());
        dispatch(addAccountToList([]));

        const response = await accountService.getAll();

        dispatch(hideLoading());
        const accountList = response['content'];
        dispatch(addAccountToList(accountList));
    }
}