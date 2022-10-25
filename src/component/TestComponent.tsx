import React, {Component} from 'react';

interface IState {
    state1: number,
    state2: number,
}

class TestComponent extends Component<any, IState> {

    constructor(props: any) {
        console.log("constructor!!")
        super(props);
        this.state = {
            state1: 0,
            state2: 0
        }
    }

    changeState1 = () => {
        this.setState({
            ...this.state,
            state1: Math.random()
        })
    }

    changeState2 = () => {
        this.setState({
            ...this.state,
            state2: Math.random()
        })
    }

    componentDidMount() {
        console.log("componentDidMount!!")
    }

    shouldComponentUpdate(nextProps: Readonly<any>, nextState: Readonly<IState>, nextContext: any): boolean {
        // if (this.state.state1 !== nextState.state1) {
        //     return true;
        // }
        return false;
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IState>, snapshot?: any) {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        console.log(this.state)
        console.log("render!!!")
        return (
            <div>
                <button onClick={this.changeState1}>Change state1</button>
                <button onClick={this.changeState2}>Change state2</button>


                <h1>{Math.random()}</h1>
                <button onClick={() => this.forceUpdate()}>ForceUpdate</button>
            </div>
        );
    }
}

export default TestComponent;