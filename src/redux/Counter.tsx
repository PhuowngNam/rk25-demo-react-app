import React, {useState} from 'react';
import store from "./redux-app";
import {decreaseAction, increaseAction} from "./action/counter-action";
import counterSelector from "./selector/counter-selector";
import {addAccountToListAsync} from "../react-redux-demo/action/account-acction";

function Counter() {
    const [counter, setCounter] = useState(0);
    function handleIncrease() {
        store.dispatch(increaseAction(10))
    }
    function handleDecrease() {
        store.dispatch(decreaseAction(20))
    }
    store.subscribe(() => {
        const newCounter = counterSelector();
        setCounter(newCounter);
    });

    const getAccount = () =>  {
        // const response = await accountService.getAll();
        // dispatch(addAccountToList(response.content));
        //@ts-ignore
        store.dispatch(addAccountToListAsync());
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>INCREASE</button>
            <button onClick={handleDecrease}>DECREASE</button>
            <button onClick={getAccount}>Get Account</button>
        </div>
    );
}

export default Counter;