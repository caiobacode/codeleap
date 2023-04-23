import React, { useEffect } from 'react';
import { Header, PostForm, Post } from '../components';
import '../style/Home.css';
import { useSelector } from 'react-redux';
import { selectPosts } from '../redux/postsSlice';
import { getLocalStorage } from '../actions';
import { useNavigate } from 'react-router-dom';

export default function Home () {
  const pagePosts = useSelector(selectPosts);
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
    <div className='home-div'>
      <Header/>
      <div className='home-content'>
        <PostForm/>
        { pagePosts?.map((p) => <Post key={p.id} postInfo={p}/>)}
      </div>
    </div>
  );
}
