import React, {useState} from 'react';
import store from "./redux-app";

function Show() {

    const [state, setState] = useState(0);

    store.subscribe(() => {
        setState(store.getState().counter);
    })
    return (
        <div>SHOW: {state}</div>
    );
}

export default Show;