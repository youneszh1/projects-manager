import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/home"} style={{textDecoration: 'none'}} className="navbar-brand link"><h5>Mr.Leader</h5></Link>
                <div className="d-flex">
                    <Link style={{textDecoration: 'none'}} to={"/login"} className="nav-link mx-1 logBtn" >Login</Link>
                    <Link style={{textDecoration: 'none'}} to={"/register"} className="nav-link regBtn" >Register</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


