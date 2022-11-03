import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {decreaseAction, increaseAction} from "./counter-action";

function Counter(props: any) {

    const dispatch = useDispatch();
    const selector = useSelector(state => {
        return state;
    });

    function handleIncrease() {
        // props.dispatch(increaseAction(10));
        // props.increaseAction(10);
        dispatch(increaseAction(10));
    }
    function handleDecrease() {
        // props.dispatch(decreaseAction(20));
        // props.decreaseAction(20);
        dispatch(decreaseAction(20));
    }

    return (
        <div>

            <h1>{
                //@ts-ignore
                selector.counter}
            </h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
        </div>
    );
}

// const mapDispatchToProps = connect(
//     null,
//     {increaseAction, decreaseAction}
// )(Counter);
//
// const mapStateToProps = (state: any, props: any) => {
//     return {
//         ...props,
//         counter: state.counter,
//     }
// }

// export default connect(mapStateToProps)(mapDispatchToProps);
// export default connect(mapStateToProps)(Counter);
export default Counter;