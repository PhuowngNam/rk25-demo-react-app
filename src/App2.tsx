import React, {Component} from 'react';
import App from "./App";

class App2 extends Component<any, {isShow: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {
            isShow: false
        }
    }

    handleClick = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log(this.state.isShow)
        return (
            <div>
                {this.state.isShow && <App/>}
                <button onClick={this.handleClick}>Show</button>
            </div>
        );
    }
}

export default App2;