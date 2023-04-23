import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style/App.css';

import { Signup, Home } from './pages/Index';
import { getPosts, getLocalStorage } from './actions';
import { setPosts, signupUser } from './redux';
import { selectAlertMode } from './redux/alertModeSlice';
import { DeletingAlert, EditingAlert } from './components';

function App () {
  const dispatch = useDispatch();
  const { isOn, alertType } = useSelector(selectAlertMode);
  console.log(isOn, alertType);

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
      {
        (isOn && alertType === 'delete') && <DeletingAlert />
      }
      {
        (isOn && alertType === 'edit') && <EditingAlert />
      }
      <Routes>
        <Route Component={Signup} exact path='/'></Route>
        <Route Component={Signup} path='/signup'></Route>
        <Route Component={Home} path='/home'></Route>
      </Routes>
    </div>
  );
}

export default App;
