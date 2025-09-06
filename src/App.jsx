import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Signup />
    </>
  )
}

export default App
