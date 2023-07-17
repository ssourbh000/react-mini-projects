import React, {useState} from 'react'

function One(){

    const [text, setText] = useState('My name is Sourabh')

    const iWasClicked = () => {

        
        (text === 'My name is Sourabh') ? setText('My name is Sarkar')
        : setText('My name is Sourabh')
    }

    return(
        <div>
            <h1> {text} </h1>
            <button onClick={iWasClicked}> Click Me</button>
        </div>
    )
}


export default One