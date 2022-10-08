import React from 'react';
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";
import {BodyHorizontal} from "./BodyHorizontal";
import {BodyVertical} from "./BodyVertical";


export default class Page extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            display: 1
        }
    }

    handleClickDisplay1 = () => {
        this.setState({
            display: 1
        })
    }
    handleClickDisplay2 = () => {
        this.setState({
            display: 2
        })
    }

    render() {

        const bodyDisplay =
            this.state.display === 1 ?
                <BodyHorizontal/> : <BodyVertical/>;

        return (
            <div>
                <div>
                    <button onClick={this.handleClickDisplay1}>
                        Display1
                    </button>
                    <button onClick={this.handleClickDisplay2}>
                        Display2
                    </button>
                </div>
                <Header/>
                <Body display={bodyDisplay}/>
                <Footer/>
            </div>
        );
    }
}