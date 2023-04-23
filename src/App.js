import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style/App.css';

import { Signup, Home } from './pages/Index';
import { getPosts, getLocalStorage } from './actions';
import { setPosts, signupUser } from './redux';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    getLoggedUser();
    setInitialPosts();
  }, []);

  async function getLoggedUser () {
    const user = getLocalStorage('codeleap-user', '');
    dispatch(signupUser(user));
  }

  async function setInitialPosts () {
    const posts = await getPosts();
    dispatch(setPosts(posts));
  }

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
