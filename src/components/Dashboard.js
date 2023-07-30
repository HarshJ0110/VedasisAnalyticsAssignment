import Navbar from "./Navbar"
import Side_nav from "./Side_nav"
import TableContainer from "./TableContainer"
import "./dashboard.css"

const Dashboard = () => {
    return (
        <div className='dash_container'>
            <div className="innercontainer1">
                <Side_nav />
            </div>
            <div className="innercontainer2">
                <div className="dash_navcontainer">
                    <Navbar />
                </div>
                <div className="dash_tablecontainer">
                    <TableContainer />
                </div>
            </div>
        </div>

    )
}

export default Dashboard

