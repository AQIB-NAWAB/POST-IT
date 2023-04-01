import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SignUp from './pages/SignUp'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard'
import Navbar from "./components/Navbar"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SignUp/>}   />
      <Route path="/login" element={<Login/>}   />
      <Route path='/dashboard'  element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
   
  )
}

export default App
