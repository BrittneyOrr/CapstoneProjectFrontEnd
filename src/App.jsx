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
  const [token, setToken] = useState(null);

  return (
    <>
      <div class="container">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to='/'>Movies</Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

        {token ? (
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to='/users/me'>Account</Link>
            </li>
          </ul>
        ) : (
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link class="nav-link" to='/login'>Sign In</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/register'>Create Account</Link>
            </li>
          </ul>
        )}
        </div> 
    </nav>
</div>
     
      <div>
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/api/movies/:movieId' element={<SingleMovie />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register setToken={setToken} />} />
          <Route path='/users/me' element={<Account token={token} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
