import React, {useEffect} from 'react';

function TestEffectHook(props: any) {

    useEffect(() => {
        // component did mount
        console.log("Render!!!!")

        //call api

        return () => {
            // component will unmount
            console.log("Unmountingggg!!!!")

            // cancel api
        }
    }, [])

    return (
        <div>

            <h3>{props.number}</h3>

        </div>
    );
}

export default TestEffectHook;