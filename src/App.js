import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Signup, Home } from './pages/Index';
import './style/App.css';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route Component={Signup} exact path='/'></Route>
        <Route Component={Signup} path='/signup'></Route>
        <Route Component={Home} path='/home'></Route>
      </Routes>
    </div>
  );
}

export default App;
