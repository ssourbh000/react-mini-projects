import React,{useState} from 'react'

function Dropdown() {

    const [text, setText] = useState('Car')

    let car1 = document.getElementById('one')

    const clicked = () => {
        setText(car1)
    }

    return (
        <div>
            <h1>{text}</h1>
            <ul >
                <li onClick={clicked} id='one'>Audi</li>
                <li>BMW</li>
                <li>Maruti</li>
                <li>TATA</li>
            </ul>
        </div>
    )
}

export default Dropdown
