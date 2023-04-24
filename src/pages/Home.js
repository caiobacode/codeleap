import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../style/Home.css';

import { Header, PostForm, Post } from '../components';
import { selectPosts, setPosts } from '../redux/postsSlice';
import { selectAlertMode } from '../redux/alertModeSlice';
import { getLocalStorage, getTenMorePosts } from '../actions';

export default function Home () {
  const pagePosts = useSelector(selectPosts);
  const { isOn } = useSelector(selectAlertMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    verifyLoggedUser();
  });

  function verifyLoggedUser () {
    const user = getLocalStorage('codeleap-user', 'not-found');
    if (user === 'not-found') {
      navigate('/signup');
    }
  }

  async function setTenMorePosts () {
    const tenMorePosts = await getTenMorePosts(pagePosts.length);
    const totalPosts = [...pagePosts, ...tenMorePosts];
    dispatch(setPosts(totalPosts));
  }

  return (
    <div className={`home-div${isOn ? ' alert-mode' : ''}`}>
      <Header />
      <div className='home-content'>
        <PostForm/>
        { pagePosts?.map((p) => <Post key={p.id} postInfo={p}/>)}
        <button
          type='button'
          className='load-more-btn'
          onClick={setTenMorePosts}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
