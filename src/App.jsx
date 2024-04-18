import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Movies from './components/Movies';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

function App() {
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
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
