import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment} from "./counter-reducer";

function Counter(props: any) {

    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    function handleIncrease() {
        // props.dispatch(increaseAction(10));
        // props.increaseAction(10);
        dispatch(increment(20));
    }
    function handleDecrease() {
        // props.dispatch(decreaseAction(20));
        // props.decreaseAction(20);
        dispatch(decrement(10));
    }

    return (
        <div>

            <h1>{
                //@ts-ignore
                selector.counter
            }
            </h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
        </div>
    );
}
export default Counter;