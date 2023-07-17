



let greeting = '';
let currTime = new Date();
currTime = currTime.getHours();

const cssStyle = {};

if(currTime>=1 && currTime<11){
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if(currTime>11 && currTime<18){
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
}
else{
  greeting = 'Good Night';
  cssStyle.color = 'blue';
}



<div className="xyz">
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
    </div>