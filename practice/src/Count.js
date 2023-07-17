import React,{useState} from 'react'

function Count() {

    const [text, setText] = useState(0);

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={()=> setText(text+1)}> Increment </button>
            <button onClick={()=> setText(text-1)}> Decrement </button>
        </div>
    )
}

export default Count
