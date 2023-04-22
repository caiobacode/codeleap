import React from 'react';
import { Header, PostForm, Post } from '../components';
import '../style/Home.css';
import { useSelector } from 'react-redux';
import { selectPosts } from '../redux/postsSlice';

export default function Home () {
  const pagePosts = useSelector(selectPosts);

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
