import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    function handleChange(){}
    
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 ">
                    <h3 className='text-center my-4'>Login</h3>
                    <form>
                        <div className="form-outline mb-2">
                            <input type="email" id="form2Example1" className="form-control" />
                            <label className="form-label" htmlFor="form2Example1">Email address</label>
                        </div>

                        <div className="form-outline mb-2">
                            <input type="password" id="form2Example2" className="form-control" />
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>

                        <div className="row mb-2">
                            <div className="col d-flex justify-content-between ">
                            <div className="form-check">
                                <input className="form-check-input" onChange={handleChange} type="checkbox" value="" id="form2Example31" />
                                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            </div>
                        </div>

                            <div className="col d-flex justify-content-end">
                                <Link to="/password-recovery" style={{color:'#646cff'}}>Forgot password?</Link>
                            </div>
                        </div>
                        <div className="text-center mb-2">
                            <button type="button" className="btn btn-block " style={{background: '#646cff', color:'white'}}>Login</button>
                        </div>

                        <div className="text-center">
                            <p>Not a member? <Link to="/register"  style={{color:'#646cff'}}>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}




export default Login;
