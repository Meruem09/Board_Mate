import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/user/Register';
import Home from './components/Home';
import Login from './components/user/Login';
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Register' element={<Register/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
