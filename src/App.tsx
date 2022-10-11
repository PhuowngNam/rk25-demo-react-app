import React, {Component} from 'react';
import './App.css';
import {Person, PersonF, PersonProps} from "./component/class-component/Person";
import {ReactComponent} from "*.svg";
import {ItemListStyle} from "./component/generic/ItemListStyle";
import Counter from "./component/Counter";
import {CounterDataContext, defaultCounterData} from './context/CounterDataContext';

interface IAppState {
    count: number,
    setCount: (newValue:number) => void
}

class App extends Component<any, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            count: defaultCounterData.count,
            setCount: this.changeCount
        }
    }

    changeCount = (value: number) => {
        this.setState({
            count: value
        })
    }

    render() {
        const initCounterData = {
            count: this.state.count,
            setCount: this.changeCount
        }
        return (
            <>
                <CounterDataContext.Provider
                    value={initCounterData}
                >
                    <Show/>
                    <Counter/>
                </CounterDataContext.Provider>
            </>
        );
    }
}

const Show = () => {
    return (
        <>
            <CounterDataContext.Consumer>
                {
                    contextData => {
                        return (
                            <div>
                                Counter: {contextData.count}
                            </div>
                        )
                    }
                }
            </CounterDataContext.Consumer>
        </>
    )
}

export default App;
