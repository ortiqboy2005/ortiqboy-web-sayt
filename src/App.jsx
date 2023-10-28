import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Skillis from './pages/Skillis/Skillis.jsx'


function App() {
  return (
    <div className='App'>
        <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skillis' element={<Skillis/>}/>
        
      </Routes>
    </div>
  )
}

export default App
