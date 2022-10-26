import React from 'react';
import StyleHoc from "./hoc/StyleHOC";
import HeaderHOC from "./hoc/HeaderHOC";

function App4() {
    const HelloWithHeaderWithStyle = HeaderHOC(StyleHoc(Hello));
    return (
        <div>
            <HelloWithHeaderWithStyle value={'HELLO'}/>
        </div>
    );
}

const Hello = (props: any) => {
    return (
        <p {...props}>{props.value}</p>
    )
}

export default App4;