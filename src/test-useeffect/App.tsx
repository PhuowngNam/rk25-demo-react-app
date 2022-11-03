import React, {useState} from 'react';
import TestEffectHook from "./TestEffectHook";

function App() {

    const [randomNumber, setRandomNumber] = useState(Math.random());
    const [isShow, setIsShow] = useState(false);

    function reRender() {
        setRandomNumber(Math.random());
    }

    function handleShow() {
        setIsShow(!isShow);
    }

    return (
        <div>
            {isShow && <TestEffectHook number={randomNumber}/>}
            <button onClick={reRender}>Re-render</button>
            <button onClick={handleShow}>{isShow ? 'HIDE' : 'SHOW'}</button>
        </div>
    );
}

export default App;