import React from 'react';
import logo from './logo.svg';
import './App.css';
import {accountService} from "./service/account.service";
import axios from "axios";


interface IAccount {
    id: string,
    username: string
}

interface IState {
    content: IAccount[],
    source: any
}

class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);

        this.state = {
            content: [],
            source: axios.CancelToken.source()
        }
    }

    async componentDidMount() {
        const data = await accountService.getAll(this.state.source.token);
        this.setState(data);
    }

    handleClick(id: string) {
        accountService.getOne(id).then(data => {
            console.log(data)
        });
    }

    componentWillUnmount() {
        // const controller = new AbortController();
        // controller.abort();
        this.state.source.cancel();

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.content.map(item => {
                        return (
                            <li style={{cursor: 'pointer'}} onClick={e => this.handleClick(item.id)}>{item.id} - {item.username}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
