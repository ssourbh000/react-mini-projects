import React,{useState} from 'react'

const UseStateArray = () => {

    const myData = [
        {id:1, Name: "Sourabh", Age: 27},
        {id:2, Name: 'Sarkar', Age: 26}
    ]

    const [myArray, setMyArray] = useState(myData);

    const clearArray = () => {
        setMyArray([]);
    }

    return (
        <>
            {
                myArray.map((elem) =>
                    <h1>Name- {elem.Name} & Age- {elem.Age}</h1>
                )
            }

            <button onClick={clearArray}>Clear</button>
        </>
    )
}

export default UseStateArray
