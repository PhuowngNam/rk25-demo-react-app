import {accountService} from "../../service/account.service";

export type AccountActionType = {
    type: string,
    payload: any
}

export const addAccountToList = (accountList: any[]): AccountActionType => {
    console.log("accountList")
    console.log(accountList)
    return {
        type: 'ADD',
        payload: accountList
    }
}

export const addAccountToListAsync = async () => {
    const response = await accountService.getAll();
    const accountList = response['content'];
    return {
        type: 'ADD',
        payload: accountList
    }
}