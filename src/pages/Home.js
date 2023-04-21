import React from 'react';
import Header from '../components/Header';
import '../style/Home.css';
import PostForm from '../components/PostForm';

export default function Home () {
  return (
    <div className='home-div'>
      <Header/>
      <div className='home-content'>
        <PostForm/>
      </div>
    </div>
  );
}
