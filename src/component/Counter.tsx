import React, {Component} from 'react';
import {CounterDataContext, CounterDataContextType} from '../context/CounterDataContext';

type CounterStateType = {
    // count: number;
}

type CounterPropsType = {
    // getDataFromCounter: (value: number) => void
}

class Counter extends Component<CounterPropsType, CounterStateType> {

    constructor(props: any) {
        super(props);
    }

    // increase = () => {
    //     //@ts-ignore
    //     const newCount = this.context.count + 1;
    //     //@ts-ignore
    //     this.context.setCount(newCount);
    // }
    // decrease = () => {
    //     //@ts-ignore
    //     const newCount = this.context.count - 1;
    //     //@ts-ignore
    //     this.context.setCount(newCount);
    // }
    //
    // render() {
    //     return (
    //         <>
    //             <button
    //                 style={{marginRight: 10}}
    //                 onClick={this.increase}>
    //                 INCREASE
    //             </button>
    //             <button
    //                 onClick={this.decrease}>
    //                 DECREASE
    //             </button>
    //         </>
    //     );
    // }

    render() {
        return (
            <CounterDataContext.Consumer>
                {
                    context => {
                        const increase = () => {
                            const newCount = context.count + 1;
                            context.setCount(newCount);
                        }
                        const decrease = () => {
                            const newCount = context.count - 1;
                            context.setCount(newCount);
                        }
                        return (
                            <>
                                <button
                                    style={{marginRight: 10}}
                                    onClick={increase}>
                                    INCREASE
                                </button>
                                <button
                                    onClick={decrease}>
                                    DECREASE
                                </button>
                            </>
                        )
                    }
                }
            </CounterDataContext.Consumer>
        );
    }
}

// Counter.contextType = CounterDataContext

export default Counter;