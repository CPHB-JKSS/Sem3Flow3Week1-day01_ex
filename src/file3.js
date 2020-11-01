import React from 'react';
import { persons } from "./file2";

console.log(persons[1].firstName)

function Welcome(props) {
    return <p>Hello {props.name}</p>;
}

function WelcomePerson(person) {
    return <p>Hello {person.firstName} {person.lastName}, email: "{person.email}"</p>
}

export default function MultiWelcome() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edith" />
            {persons.map((person) => <WelcomePerson person />)}
        </div>
    );
}
