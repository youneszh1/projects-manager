import { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const Register = () => {
    const {accounts, connected, setConnected} = useContext(UserContext)
    
    const initialVal = {username: '', password: ''}
    const [formValues, dispatch] = useReducer(reducer, initialVal)

    function reducer(state, action){
        switch (action.type){
            case 'EMAIL': 
                return { ...state, username: action.payload };
            case 'PASSWORD':
                return { ...state, password: action.payload };
            default: return state;
        }
    }

    function handleSubmit(e){
        e.preventDefault()

        const validAcc = accounts.filter(acc => (acc.email === formValues.username || acc.username === formValues.username) && acc.password === formValues.password )

        validAcc.length === 1 ? setConnected(true) : setConnected(false);
    }
    return (
        <div className="container w-50 py-4 my-5 border rounded shadow p-3 mb-5 bg-body-tertiary">
            {/* {console.log(formValues, connected)} */}
            <div className="row justify-content-center align-items-center">
                <div className="col-md-8 ">
                    <h3 className='text-center my-4'>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form2Example1">Email address or username</label>
                            <input type="text" id="form2Example1" className="form-control" onChange={(e) =>dispatch({type: 'EMAIL', payload : e.target.value})} />
                        </div>
                        
                        <div className="form-outline mb-2">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input type="password" id="form2Example2" className="form-control"  onChange={(e) =>dispatch({type: 'PASSWORD', payload : e.target.value})}/>
                        </div>

                        <div className="row mb-2">
                            <div className="col d-flex justify-content-end">
                                <Link to="/password-recovery" style={{color:'#646cff'}}>Forgot password?</Link>
                            </div>
                        </div>
                        <div className="text-center mb-2">
                            <button type="submit" className="btn btn-block " style={{background: '#646cff', color:'white'}}>Login</button>
                        </div>
                        <hr className='border border-secondary bordered opacity-25' />
                        <div className="text-center">
                            <p>Already member? <Link to="/login"  style={{color:'#646cff'}}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
