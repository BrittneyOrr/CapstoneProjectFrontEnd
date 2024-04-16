import React, { useState } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import './App.css'
import Movies from './components/Movies';
import login from './components/login';
import register from './components/register';

function App() {
  const [] = useState()

  return (
    <>

      <div id="container">
        <Link to='/'>Movies</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>

      </div>
     
      <div>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/login' element={<login />} />
          <Route path='/register' element={<register />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
