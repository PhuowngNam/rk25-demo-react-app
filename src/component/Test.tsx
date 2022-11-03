import React from 'react';

function Test(props: any) {
    return (
        <div>
            <h1>Hello</h1>
            <p>Tọa độ là: {props.x} - {props.y}</p>
        </div>
    );
}

export default Test;