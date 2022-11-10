export type LoadingActionType = {
    type: string
}

export const showLoading = (): LoadingActionType => {
    return {
        type: 'SHOW'
    }
}

export const hideLoading = (): LoadingActionType => {
    return {
        type: 'HIDE',
    }
}