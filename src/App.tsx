import React, {Component} from 'react';
import './App.css';
import {Person, PersonF, PersonProps} from "./component/class-component/Person";
import {ReactComponent} from "*.svg";
import {ItemListStyle} from "./component/generic/ItemListStyle";

interface IAppState {
    id: string,
    fullName: string,
    personList: PersonProps[]
}

class App extends Component<any, IAppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: '',
            fullName: '',
            personList: [
                {id: "1", fullname: "Pham Quang Dung", age: 23, height: '180cm'},
                {id: "2", fullname: "Nguyen QUang Hai", age: 23},
            ]
        }
    }

    handleOnClickPerson = (id: string) => {
        this.setState({
            ...this.state,
            id: id
        })
    }

    changeFullNameInput = (value: string) => {
        this.setState({
            ...this.state,
            fullName: value
        })
    }

    update = () => {
        if (this.state.id) {
            const newPersonList = this.state.personList.map(person => {
                if (person.id === this.state.id) {
                    person.fullname = this.state.fullName;
                }
                return person;
            })

            this.setState({
                ...this.state,
                personList: newPersonList
            })
        }
    }

    render() {
        return (
            <>
                {this.state.personList.length !== 0 && (
                    <>
                        <div className="App">
                            {this.state.personList.map(user => {
                                return (
                                    <ItemListStyle>
                                        <Person
                                            id={user.id}
                                            fullname={user.fullname}
                                            age={user.age}
                                            height={user.height}
                                            onClickPerson={() => {
                                                this.handleOnClickPerson(user.id)
                                            }}
                                        />
                                        <div>
                                            13123
                                        </div>
                                    </ItemListStyle>
                                )
                            })}
                            <div>
                                ID: <input disabled value={this.state.id}
                                // onChange={(e) => {
                                //     this.changeIdInput(e.target.value)
                                //}}
                            />

                                FullName: <input value={this.state.fullName} onChange={
                                (e) => {
                                    this.changeFullNameInput(e.target.value)
                                }}/>
                                <button onClick={this.update}>
                                    Cập nhật
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {!this.state.personList.length && (
                    <>
                        <div>Nothing</div>
                    </>
                )}
            </>
        );
    }
}

export default App;
