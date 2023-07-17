import React from 'react'



const name = 'Sourabh Sarkar';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

function Datetime() {
    return (
        <div>
            <div>
                <h1>Hello, My name is {name}</h1>
                <p> Today's date is {currDate} </p>
                <p> Today's date is {currTime} </p>
            </div>
            
        </div>
    )
}

export default Datetime
