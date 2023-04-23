import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/Home.css';

import { Header, PostForm, Post } from '../components';
import { selectPosts } from '../redux/postsSlice';
import { selectAlertMode } from '../redux/alertModeSlice';
import { getLocalStorage } from '../actions';

export default function Home () {
  const pagePosts = useSelector(selectPosts);
  const { isOn } = useSelector(selectAlertMode);
  const navigate = useNavigate();

  useEffect(() => {
    verifyLoggedUser();
  });

  function verifyLoggedUser () {
    const user = getLocalStorage('codeleap-user', 'not-found');
    if (user === 'not-found') {
      navigate('/signup');
    }
  }

  return (
    <div className={`home-div ${isOn && 'alert-mode'}`}>
      <Header/>
      <div className='home-content'>
        <PostForm/>
        { pagePosts?.map((p) => <Post key={p.id} postInfo={p}/>)}
      </div>
    </div>
  );
}
