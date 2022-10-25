import React, {Component} from 'react';
import Person, {IPerson} from "./component/Person";

class App2 extends Component<any, {personList: IPerson[]}> {
    constructor(props: any) {
        super(props);
        this.state = {
            personList: [
                {id: "1", name: "Dung", address: {city: 'HN', street: 'Cau giay'}},
                {id: "2", name: "Quang", address: {city: 'HN', street: 'Lang'}},
            ]
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                personList: [...this.state.personList]
            })
        }, 1000);
    }

    render() {
        console.log("App render!!!")
        return (
            <div>
                <ul>
                    {this.state.personList.map(person => {
                        return (
                            <li>
                                <Person id={person.id} name={person.name} address={person.address}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default App2;