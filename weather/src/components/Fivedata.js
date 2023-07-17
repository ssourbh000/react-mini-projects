import React from 'react'

function Fivedata(props) {



  




    // var city = {props.cityname};

    // function currentWeather(){
    //      var input = document.getElementById('myInput');
    //     //  var cityn = document.getElementById('city');
    //      var temp = document.getElementById('temp');
    //     //  var desc = document.getElementById('desc');

            

    //         input.addEventListener("keyup", e =>{
    //             if(e.key == "Enter" && input.value != ""){
    //                 requestApi(input.value);
    //             }
    //         });

            

    //         function requestApi(){
    //             fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=3fbb2b31fd3e77c536be64abc677a4d1`)
    //             .then(response => response.json())
    //             .then(data => console.log(data))
    //             // .then(data => {
    //             // var nameCityValue = data['name'];
    //             // var tempValue = data['main']['temp'];
    //             // var descValue = data['weather'][0]['description'];

    //             // cityn.innerHTML = nameCityValue;
    //             // temp.innerHTML = tempValue;
    //             // desc.innerHTML = descValue;
                

    //             // })
    //             .catch(err => alert("wrong city name"))
    //         }
    // }






    
    // function fiveday(){
        //  var input = document.getElementById('myInput');
        //  var cityn = document.getElementById('city');
        //  var temp = document.getElementById('current');
        //  var desc = document.getElementById('desc');


        //     input.addEventListener("keyup", e =>{
        //         if(e.key == "Enter" && input.value != ""){
        //             requestApi(input.value);
        //         }
        //     });

        //     function requestApi(city){
        //         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46c4d143651db89410e08a6e7010ad41&units=metric`)
        //         .then(response => response.json())
        //         .then(data => {
        //         var nameCityValue = data['name'];
        //         var tempValue = data['main']['temp'];
        //         var descValue = data['weather'][0]['description'];

        //         cityn.innerHTML = 'City :  '+nameCityValue;
        //         temp.innerHTML = 'Temperature: '+tempValue + ' celsius';
        //         desc.innerHTML = 'Weather: '+descValue;
                

        //         })
        //         .catch(err => alert("wrong city name"))
        //     }

        // }

  return (
    <div id='lr_box'>
        <h1>5 Day Weather Forecast</h1>
        <p id="temp"></p>
    </div>
  )
}

export default Fivedata





// useEffect( () => {
    //     const fetchApi = async() => {
    //         const url = 
    //         const response = await fetch(url);
    //         // console.log(response);
    //         const resjson = await response.json();
    //         console.log(resjson);
    //         setCity(resjson);
    //     }

    //     fetchApi();
    // },[])

    // function mainfunction(){

    //     function currentWeather(){
    //      var input = document.getElementById('myInput');
    //      var cityn = document.getElementById('city');
    //      var temp = document.getElementById('current');
    //      var desc = document.getElementById('desc');


    //         input.addEventListener("keyup", e =>{
    //             if(e.key == "Enter" && input.value != ""){
    //                 requestApi(input.value);
    //             }
    //         });

    //         function requestApi(city){
    //             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46c4d143651db89410e08a6e7010ad41&units=metric`)
    //             .then(response => response.json())
    //             .then(data => {
    //             var nameCityValue = data['name'];
    //             var tempValue = data['main']['temp'];
    //             var descValue = data['weather'][0]['description'];

    //             cityn.innerHTML = 'City :  '+nameCityValue;
    //             temp.innerHTML = 'Temperature: '+tempValue + ' celsius';
    //             desc.innerHTML = 'Weather: '+descValue;
                

    //             })
    //             .catch(err => alert("wrong city name"))
    //         }

    //     }

    // }