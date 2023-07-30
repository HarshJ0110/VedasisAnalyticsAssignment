import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }
    return (
        <>
            <div className='nav_container'>
                <ul className='user'><li><button className='user_btn' ><i className="fa-solid fa-circle-user fa-xl " style={{ marginRight: "20px" }}></i>Harsh Jain<i class="fa-sharp fa-solid fa-caret-down fa-lg" style={{ marginLeft: "1.2vh" }}></i>
                </button></li></ul>
                <ul><li className='com_name' style={{ fontSize: "25px" }}>Vedasis</li></ul>
                <ul><li><button onClick={handleClick}>
                    {!nav ? <i className="fa-solid fa-bars hamburg"></i> : <i className="fa-solid fa-xmark mt-5 mr-5 hamburg fa-lg" style={{ color: "black" }}></i>}
                </button></li></ul>
            </div>
            <div >{nav && <div className='hor_nav'>
                <ul className='mov_navbar'>
                    <li style={{ marginLeft: "-40px" }}><button onClick={handleClick}><i className="fa-solid fa-circle-user fa-xl " style={{ marginRight: "20px" }}></i>Harsh Jain
                    </button></li>
                    <Link to="/" onClick={handleClick}><li>Security</li></Link>
                    <Link to="/" onClick={handleClick}><li>Setting</li></Link>
                    <Link to="/" onClick={handleClick}><li>Download</li></Link>
                </ul>
            </div>}
            </div>
        </>
    )
}

export default Navbar