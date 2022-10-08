import React, {Component, FunctionComponent} from 'react';

export type PersonProps = {
    id: string,
    fullname: string,
    age: number,
    height?: string,
    aside?: any
    onClickPerson?: () => void,
}

export class Person extends  React.Component<PersonProps, any> {

    static defaultHeight: number = 0;

    constructor(props: PersonProps) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleClickIncrease = () => {

        this.setState((prevState: any) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleClickDecrease = () => {
        const newCounter = this.state.counter - 1;

        this.setState({
            counter: newCounter
        })
    }

    render() {
        return (
            <div style={{cursor: 'pointer'}} onClick={this.props.onClickPerson}>
                <h3>ID: {this.props.id} --- Fullname: {this.props.fullname}</h3>
            </div>
        )
    }
}

export const PersonF = (props: PersonProps) => {
    const defaultHeight: number = 0;

    return (
        <div>
            {props.aside}
            <div>
                <h3>Fullname: {props.fullname}</h3>
                <p>Age: {props.age}</p>
                <p>Height: {props.height ? props.height : defaultHeight}</p>
            </div>
        </div>
    )
}