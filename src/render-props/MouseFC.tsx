import React, {Component, useState} from 'react';

type ToaDoType =  {
    x: number,
    y: number
}

const MouseFC = (props: any) => {

    const [toaDo, setToaDo] = useState<ToaDoType>({x: 0, y: 0})

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setToaDo({
            x: e.clientX,
            y: e.clientY
        });
    }

    return (
        <>
            <div onMouseMove={e => handleMouseMove(e)}>
                {/*cach 1: render-prop*/}
                {/*{this.props.render(this.state)}*/}
                {props.children(toaDo)}
            </div>
        </>
    );
}

export default MouseFC;