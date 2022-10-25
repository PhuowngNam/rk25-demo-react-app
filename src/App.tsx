import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from "./component/TestComponent";

class App extends React.Component<any, {isShow: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = {
            isShow: true
        }
    }

    showTestComponent = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div className="App" id={'app_id'}>
                {this.state.isShow && <TestComponent/>}
                <button onClick={this.showTestComponent}>Show TestComponent</button>
            </div>
        );
    }
}

export default App;
