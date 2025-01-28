import { useState } from 'react'
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
