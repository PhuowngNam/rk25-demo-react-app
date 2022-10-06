import React from 'react';
import './App.css';
import {Person, PersonF, PersonProps} from "./component/class-component/Person";

function App() {
    const userList: PersonProps[] = [
        {fullname: "Pham Quang Dung", age: 23, height: '180cm'},
        {fullname: "Pham Quang Dung", age: 23},
    ]
    console.log(123)
    return (
        <div className="App">
            {/*<Person fullname={"Nguyen Van Hung"} age={22} height={'180cm'}/>*/}
            {/*<Person fullname={"Pham Quang Dung"} age={23}/>*/}

            {/*{userList.map(user => {*/}
            {/*    return (*/}
            {/*        <PersonF aside={<Aside/>} fullname={user.fullname} age={user.age} height={user.height}/>*/}
            {/*    )*/}
            {/*})}*/}

            {userList.map(user => {
                return (
                    <Person fullname={user.fullname} age={user.age} height={user.height}/>
                )
            })}
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
