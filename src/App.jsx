import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import 'rsuite/dist/rsuite.min.css';
import { Message } from 'rsuite';

import Layout from './Components/Layout'
import Home from './Components/Pages/Home.jsx';
import Login from './Components/Pages/Login.jsx';
import Register from './Components/Pages/Register.jsx';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css'
import UserContext from './Components/Contexts/UserContext.js';



function App() {
  const [users, setUser] = useState({fullname: '', username: '', email: '', password: '', fonction: ''})
  const [accounts, setAccounts] = useState([{username: 'youneszh1', email: 'youneszh1@gmail.com', password: '123'}])
  const [connected, setConnected] = useState(undefined)

  return (
    <>
        <UserContext.Provider value={{accounts, connected, setConnected}}>
          <Layout/>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </UserContext.Provider>
        
    </>
  )
}




export default App
