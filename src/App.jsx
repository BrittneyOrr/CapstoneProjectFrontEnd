import React, { useState } from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import './App.css'
import Movies from './components/Movies';

function App() {
  const [] = useState()

  return (
    <>

      <div id="container">
        <Link to='/'>Movies</Link>
      </div>
     
      <div>
        <Routes>
          <Route path='/' element={<Movies />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
