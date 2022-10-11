import React, {Component} from 'react';
import './App.css';
import {Person, PersonF, PersonProps} from "./component/class-component/Person";
import {ReactComponent} from "*.svg";
import {ItemListStyle} from "./component/generic/ItemListStyle";
import Counter from "./component/Counter";

interface IAppState {
    value: number
}

class App extends Component<any, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            value: 0
        }
    }

    getCount = (newValue: number) => {
        this.setState({
            ...this.state,
            value: newValue
        })
    }

    render() {
        return (
            <>
                <Show count={this.state.value}/>
                <Counter getDataFromCounter={this.getCount}/>
            </>
        );
    }
}

const Show = (props: {count: number}) => {
    return (
        <>
            <div>
                Counter: {props.count}
            </div>
        </>
    )
}

export default App;
