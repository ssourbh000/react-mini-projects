import React from 'react'
import "./Text.css"


function Text() {
  return (
    <div style={{display: "flex", flexDirection:"column" ,justifyContent: "center", alignItems:"center"}}>
      <h1>Hey, test your Taste Buds with a new Recipe.</h1>
      <img style={{width: "50%", height: "60vh", borderRadius: "50%"}} src="food-1024x683.jpg" alt="food" />
    </div>
  )
}

export default Text