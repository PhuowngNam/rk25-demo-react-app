import React, {useEffect} from 'react';


type PersonType = {
    name: string,
    gender: string
}

function App3() {

    const personList: PersonType[] = [
        {name: 'Dung', gender: 'nam'},
        {name: 'Ha', gender: 'nu'}
    ]

    const hof = (personList: PersonType[],
                 conditionFunction: (value: any) => boolean,
                 actionFunction: (person: PersonType) => void) => {
        personList.forEach(person => {
            if (conditionFunction(person)) {
                actionFunction(person);
            }
        })
    }

    const genderCheck = (gender: string) => {
        return (person: PersonType) => person.gender === gender;
    }

    const nameCheck = (name: string) => {
        return (person: PersonType) => person.name === name;
    }

    const printPerson = (person: PersonType) => {
        console.log(person);
    }

    hof(personList, nameCheck('Ha'), printPerson)

    return (
        <div>

        </div>
    );
}

export default App3;