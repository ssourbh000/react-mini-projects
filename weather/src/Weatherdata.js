import React,{useState} from 'react'
// import Fivedata from './components/Fivedata'
import './Weatherdata.css'


function Weatherdata() {

    const [query, setQuery] = useState('');
    const [data, setData] = useState({});
    const [tempc, setTempc] = useState('');


    const search = (e) => {
        if(e.key === "Enter"){
            // fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${query}&cnt=5&appid=dd959839e4e97d307921411b587b3fc9&units=metric`)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=46c4d143651db89410e08a6e7010ad41&units=metric`)
            .then(res => res.json())
            .then(result => {
                setData(result);
                setTempc(result.main.temp);
                setQuery('');
                console.log(result);
            } );
        }
    }

    
    

    
  return (
      <div id="main">
        
        <div id="myDropdown">
            <h1>Search City</h1>
            <input type="text" placeholder="Search here" id="myInput" onChange={(event)=>{setQuery(event.target.value)}} value={query} onKeyPress={search} />
            {/* <input type="submit" value="Search" id='btn' /> */}
        </div>
        
        
            <div className="box">
                <div id='lr_box'>
                    <h1>Current Weather Data</h1>
                    <div style={{marginTop:"80px"}}>
                        <div><h3 >{data.name}</h3></div>
                        <div><h3 >{Math.round(tempc)} °C</h3> </div>
                    </div>
                    
                </div>
                <div id='lr_box'>
                    <h1>5 Weather Data</h1>
                    <div style={{marginTop:"80px"}}>
                        <p id='city'></p>
                        <p id='current'></p>
                        <p id='desc'></p>
                    </div>
                    
                </div>
            </div>
        

        

        
      </div>
    
  )
}

export default Weatherdata