import React from 'react'

const csStyle = {};
csStyle.color = 'Green'

function Card(props, csStyle) {
    return (
        <h1>Hello, <span style={csStyle}>{props.name}</span></h1>
    )
}

export default Card
