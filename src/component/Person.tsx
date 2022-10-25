import React, {Component} from 'react';
import styles from '../css/Person.module.css'

export interface IPerson {
    id: string,
    name:string,
    address: {
        city: string,
        street: string
    }
}

class Person extends Component<IPerson, any> {

    shouldComponentUpdate(nextProps: Readonly<{ id: string; name: string }>, nextState: Readonly<any>, nextContext: any): boolean {
        if (this.props.id === nextProps.id && this.props.name === nextProps.name) {
            return false;
        }
        return true;
    }

    render() {
        console.log("render - " + this.props.id)
        console.log(styles)
        return (
            <div className={styles.showPerson}>
                <h1>{this.props.id} - {this.props.name} - {this.props.address.city} - {this.props.address.street}</h1>
            </div>
        );
    }
}

export default Person;