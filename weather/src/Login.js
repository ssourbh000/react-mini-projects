import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'


function Login() {

    const navigate = useNavigate();

    function handleClick(){
        let user = document.getElementById('user').value;
        let pass = document.getElementById('pass').value;

        if(user === 'admin' && pass === 'admin'){
            navigate("weatherdata")
        }
        else{
            alert("Invalid Login Details")
        }
    }

  return (
    <div id='mainDiv'>
        <form>
            <div className="x">
                 <label htmlFor="">User Id</label>
                <input type="text" id='user' autoComplete="off" /> <br />
            </div>
           
           <div className="x">
                <label htmlFor="">Password</label>
                <input type="password" id='pass' autoComplete="off" /> <br />
           </div>
            

            <button onClick={handleClick = () => navigate("weather")}>Sign In</button>
        </form>
    </div>
  )
}

export default Login