import React, { useEffect, useState } from 'react';
import { Header, PostForm, Post } from '../components';
import { getPosts } from '../actions';
import '../style/Home.css';

export default function Home () {
  const [pagePosts, setPagePosts] = useState([]);

  useEffect(() => {
    setInitialPosts();
  }, []);

  async function setInitialPosts () {
    const allPosts = await getPosts();
    setPagePosts(allPosts);
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
