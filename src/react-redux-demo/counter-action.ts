export type CounterActionType = {
    type: string,
    payload: number
}

export const increaseAction = (num: number): CounterActionType => {
    return {
        type: 'INCREASE',
        payload: num
    }
}

export const decreaseAction = (num: number): CounterActionType => {
    return {
        type: 'DECREASE',
        payload: num
    }
}