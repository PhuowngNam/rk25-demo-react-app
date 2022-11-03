import React, {useReducer, useRef, useState} from 'react';

type ActionType = {
    type: string,
    payload: any
}

function Counter(props: any) {
    //
    // const [count, setCount] = useState(0);
    //
    // function handleIncrease() {
    //     setCount(count + 10)
    // }
    //
    // function handleDecrease() {
    //     setCount(count - 5);
    // }

    const increaseAction: ActionType = {
        type: 'INCREASE',
        payload: 10
    }

    const decreaseAction: ActionType = {
        type: 'DECREASE',
        payload: 5
    }

    const [count, dispatch] = useReducer((prevState: number, action: ActionType) => {
        switch (action.type) {
            case 'INCREASE':
                return prevState + action.payload;
            case 'DECREASE':
                return prevState - action.payload;
            default:
                return prevState;
        }
    }, 0);

    function handleIncrease() {
        dispatch(increaseAction)
    }

    function handleDecrease() {
        dispatch(decreaseAction)
    }

    return (
        <div>
            <h1>
                Counter: {count}
            </h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
        </div>
    );
}

export default Counter;