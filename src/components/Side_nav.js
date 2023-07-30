import React from 'react'
import "./side_nav.css"

const Side_nav = () => {
  return (
    <div className='side_bar'>
    <div style={{display: "flex", flexDirection: "column",alignItems: "center"}}>
      <div>
        <i class="fa-solid fa-check-double fa-2xl" style={{marginTop: "40px", fontSize: "50px"}}></i>
      </div>
      <div style={{marginTop: "30px", fontSize: "2.5vw" }}> Vedasis</div>
      <div ><i class="fa-sharp fa-solid fa-shield-halved fa-2xl" style={{marginTop: "60px" , color: "black",  fontSize: "35px"}}></i></div>
      </div>
      <i class="fa-solid fa-gear fa-2xl setting_icon" style={{marginBottom: "40px", color: "black", fontSize: "35px"}}></i>
    </div>
  )
}

export default Side_nav