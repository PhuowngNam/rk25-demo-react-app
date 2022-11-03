import React, {Component} from 'react';
import axios from "axios";
import {accountService} from "../service/account.service";

class AccountProvider extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            content: []
        }
    }

    // call api
    async componentDidMount() {
        const data = await accountService.getAll();
        this.setState(data);
    }

    render() {
        return (
            <div>
                {this.props.children(this.state)}
            </div>
        );
    }
}

export default AccountProvider;