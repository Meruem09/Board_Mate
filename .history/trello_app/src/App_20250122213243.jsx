import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './components/user/Register';
import Home from './components/Home';
import Login from './components/user/Login';
import Main from './components/main/Main';
import Header2 from './components/main/Header2';
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Sidebar from './components/main/Sidebar';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/' element={<Header2/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/' element={<Sidebar/>}></Route>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
