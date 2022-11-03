import React from 'react';
import Test from "./component/Test";
import WithMouse from "./hoc/WithMouse";
import Mouse from "./render-props/Mouse";
import AccountProvider from "./render-props/AccountProvider";
import MouseFC from "./render-props/MouseFC";

function App5(props: any) {
    // c1: using HOC
    // const TestWithMouse = WithMouse(Test);
    //
    // return (
    //     <div>
    //         <TestWithMouse/>
    //     </div>
    // );

    // c2: render-props
    return (
        <div>
            {/*<Mouse render={*/}
            {/*    (data: any) => {*/}
            {/*        return (*/}
            {/*            <>*/}
            {/*                <Hello x={data.x} y={data.y}/>*/}
            {/*            </>*/}
            {/*        )*/}
            {/*    }*/}
            {/*}/>*/}

            {/*<Mouse children={*/}
            {/*    (data: any) => {*/}
            {/*        return (*/}
            {/*            <>*/}
            {/*                <Hello x={data.x} y={data.y}/>*/}
            {/*            </>*/}
            {/*        )*/}
            {/*    }*/}
            {/*}/>*/}

            {/*<Mouse>*/}
            {/*    {(data: any) => {*/}
            {/*            return (*/}
            {/*                <>*/}
            {/*                    <Hello x={data.x} y={data.y}/>*/}
            {/*                </>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    }*/}
            {/*</Mouse>*/}

            {/*<AccountProvider>*/}
            {/*    {*/}
            {/*        (data: any) => {*/}
            {/*            return (*/}
            {/*                <AccountList data={data}/>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    }*/}
            {/*</AccountProvider>*/}

            <MouseFC>
                {(data: any) => {
                        return (
                            <>
                                <Hello x={data.x} y={data.y}/>
                            </>
                        )
                    }
                }
            </MouseFC>

        </div>
    )
}

const AccountList = (props: any) => {
    return (
        <>
            <ul>
                {props.data.content.map((acc: any) => {
                    return (
                        <li>{acc.id} - {acc.username}</li>
                    )
                })}
            </ul>
        </>
    )
}

const Hello = (props: any) => {
    return (
        <>
            <h1>HELLO</h1>
            <p>{props.x} - {props.y}</p>
        </>
    )
}

export default App5;