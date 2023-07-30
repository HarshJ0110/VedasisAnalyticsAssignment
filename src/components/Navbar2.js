import React, { useContext } from 'react'
import "./navbar2.css"
import { Link } from 'react-router-dom'
import DashContext from '../states.js/DashContext';

const Navbar2 = () => {
    const { searchTerm, setSearchTerm } = useContext(DashContext);
    return (
        <>
            <div className='nav2'>
                <div className="nav2_innercont">
                    <ul className='nav3'>
                        <li><Link className='icons'><i class="fa-sharp fa-solid fa-user" style={{ color: "green" }}></i>Users</Link></li>
                        <li><Link className='icons'><i class="fa-solid fa-campground" style={{ color: "orange" }}></i>Campaign</Link></li>
                        <li><Link className='icons'><i class="fa-solid fa-table" style={{ color: "purple" }}></i>Tables</Link></li>
                        <li><Link className='icons'><i class="fa-solid fa-clipboard-list" style={{ color: "red" }}></i>List</Link></li>
                    </ul>
                </div>
                <div><button className="btn1" onClick={() => setSearchTerm("")}><i class="fa-solid fa-arrows-rotate"></i></button><button className="btn2"><i className="fa-solid fa-download"></i> Download</button></div>
                <div className='search_1'><input placeholder='Search for Influencer' className="search" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} /> <i className="fa-sharp fa-solid fa-bars-filter"></i></div>
            </div>
            <div className='searchbar2'>
                <button className="btn3" onClick={() => setSearchTerm("")}><i class="fa-solid fa-arrows-rotate"></i></button>
                <div className='search_2'><input placeholder='Search for Influencer' className="search" value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} /> <i className="fa-sharp fa-solid fa-bars-filter"></i></div>
            </div>
        </>
    )
}

export default Navbar2