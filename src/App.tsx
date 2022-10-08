import React from 'react';
import './App.css';
import {Person, PersonF, PersonProps} from "./component/class-component/Person";

function App() {
    const userList: PersonProps[] = [
        {id: "1", fullname: "Pham Quang Dung", age: 23, height: '180cm'},
        {id: "2", fullname: "Nguyen QUang Hai", age: 23},
    ]

    function handleOnClickPerson(id: string) {
        alert(userList.filter(user => user.id === id)[0].fullname)
    }

    return (
        <div className="App">
            <ul>
                {userList.map(user => {
                    return (
                        <li key={user.id}>
                            <Person
                                id={user.id}
                                fullname={user.fullname}
                                age={user.age}
                                height={user.height}
                                onClickPerson={() => {
                                    handleOnClickPerson(user.id)
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

const Aside = () => {
    return (
        <div>
            Danh sách
        </div>
    )
}


export default App;
