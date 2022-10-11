import React, {Component} from 'react';

type CounterStateType = {
    count: number;
}

type CounterPropsType = {
    getDataFromCounter: (value: number) => void
}

class Counter extends Component<CounterPropsType, CounterStateType> {

    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClickIncrease = () => {
        const newState = {
            ...this.state,
            count: this.state.count + 1
        }
        this.setState(newState);
        this.props.getDataFromCounter(newState.count);
    }

    handleClickDecrease = () => {
        const newState = {
            ...this.state,
            count: this.state.count - 1
        }
        this.setState(newState);
        this.props.getDataFromCounter(newState.count);
    }

    render() {
        return (
            <>
                <button style={{marginRight: 10}} onClick={this.handleClickIncrease}>INCREASE</button>
                <button onClick={this.handleClickDecrease}>DECREASE</button>
            </>
        );
    }
}

export default Counter;