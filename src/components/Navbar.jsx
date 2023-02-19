import Logout from "../pages/img/logout.png"

function Navbar() {
    return ( 
        <div className="navbar">
            <span className="logo">Chatto</span>
            <div className="user">
                <span>John</span>
                <img src={Logout} alt="Log-out"/>
            </div>
        </div>
     );
}

export default Navbar;