import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Signup, Home } from './pages/Index';
import './style/App.css';
import getPosts from './actions/getPosts';
import { useDispatch } from 'react-redux';
import { setPosts } from './redux/postsSlice';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialPosts();
  }, []);

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
