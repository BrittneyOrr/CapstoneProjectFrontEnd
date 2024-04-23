import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Movies from './components/Movies';
import SingleMovie from './components/SingleMovie';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <div id="container">
        <Link to='/'>Movies</Link>

        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/account'>Account</Link>
      </div>
     
      <div>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/api/movies/${id}' element={<SingleMovie />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register setToken={setToken} />} />
          <Route path='/account' element={<Account token={token} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
