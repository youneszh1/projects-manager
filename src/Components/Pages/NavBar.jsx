import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";
import { useContext, useState } from "react";
import { Avatar, Divider } from "rsuite";

import me from '../../assets/imgs/me.jpg';

const Navbar = () => {
    const {users, connected, setConnected} = useContext(UserContext)
    return (
        <>
        {!connected ? 
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/home"} style={{textDecoration: 'none'}} className="navbar-brand link"><h5>Mr.Leader</h5></Link>
                <div className="d-flex">
                    <Link style={{textDecoration: 'none'}} to={"/login"} className="nav-link mx-1 logBtn" >Login</Link>
                    <Link style={{textDecoration: 'none'}} to={"/register"} className="nav-link regBtn" >Register</Link>
                </div>
            </div>
        </nav> : 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link to="/home" style={{textDecoration: 'none'}} className="navbar-brand"><h5>Mr.Leader</h5></Link><Divider vertical />
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item p-2">
                    <Link style={{textDecoration: 'none'}}  to="/home" className="link active icon-link icon-link-hover" aria-current="page"><i className="bi bi-house"></i> Home</Link>
                </li>
                <li className="nav-item p-2">
                    <Link className="link icon-link icon-link-hover" style={{textDecoration: 'none'}}  to="/profile"><i className="bi bi-person"></i> Profile</Link>
                </li>
                <li className="nav-item p-2">
                    <Link style={{textDecoration: 'none'}}  to="/spaces" className="link icon-link icon-link-hover"><i className="bi bi-collection"></i> Spaces</Link>
                </li>
                <li className="nav-item p-2">
                    <Link style={{textDecoration: 'none'}}  to="/spaces" className="link icon-link icon-link-hover"><i className="bi bi-tools"></i> Setting</Link>
                </li>
                </ul>
                <ul className="navbar-nav ms-auto align-items-end">
                    <li className="nav-item">
                        <Link style={{textDecoration: 'none'}}  to="/profile" className="link">
                            <Avatar circle src={me} alt="@youneszh1" />
                        </Link>
                    </li>
                    <li className="nav-item p-2">
                        <Link style={{textDecoration: 'none'}} onClick={() => setConnected(false)} to="/login" className="link icon-link icon-link-hover btn btn-outline-danger btn-sm"><i className="bi bi-box-arrow-right"></i> Logout</Link>
                    </li>
                </ul>
            </div>            
            </div>
        </nav>
        }
    </>
    );
};

export default Navbar;


