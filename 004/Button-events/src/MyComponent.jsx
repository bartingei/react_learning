import React ,{useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");

    const updateName = () => {
        setName("Johnpaul");
    }

    const [age, setAge] = useState(0);

    const incrementAge = () => {
        setAge(age + 1);
    }

    const [isEmployed, setIsEmployed] = useState(true);
    const toggleEmployed = () => {
        setIsEmployed(!isEmployed);

    }

    return(
        <div>
            <p>Name: {name}</p>
            <button type="button" onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button type="button" onClick={incrementAge}>Increment Age</button>
            <p>Is Employed:{isEmployed ? "yes" : "no"}</p>
            <button type="button" onClick={toggleEmployed}>Set employment status</button>
        </div>
    );
}

export default MyComponent