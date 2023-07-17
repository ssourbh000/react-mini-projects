import React from "react";

let greeting = '';

let currTime = new Date();
currTime = currTime.getHours();

const cssStyle = {};

if(currTime >= 1 && currTime < 11){
    greeting = 'Good Morning';
    cssStyle.color = 'Green'
}
else if(currTime >= 12 && currTime < 19){
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange'
}
else{
    greeting = 'Good Night';
    cssStyle.color = 'Black'
}

function Heading(){
    return <h1>Hello Sir, <span style={cssStyle}> {greeting} </span></h1>
}

export default Heading;