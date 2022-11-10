import React from 'react';
import {addAccountToListAsync} from "./action/account-acction";
import {useDispatch, useSelector} from "react-redux";

function DemoReduxThunk(props: any) {

    const dispatch = useDispatch();
    const selector = useSelector<any>(state => {
        return state;
    });

    const getAccount = () =>  {
        //@ts-ignore
        dispatch(addAccountToListAsync());
    }

    console.log("selector")
    console.log(selector)

    return (
        <div>
            <button onClick={getAccount}>Get Account</button>
            {
                //@ts-ignore
                selector.loadingReducer.isLoading && <h1>Loading.....</h1>
            }
            <ul>
                {
                    //@ts-ignore
                    selector.accountReducer.data.map(acc => {
                    return <li>{acc.username}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default DemoReduxThunk;