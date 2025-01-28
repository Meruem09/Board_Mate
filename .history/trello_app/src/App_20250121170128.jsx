import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {

  return (
    <>
    <header>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
    </header>
    </>
  )
}

export default App
