import React, { useState } from 'react';

export default function PostForm () {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const handleClick = () => {
    setPostTitle('');
    setPostContent('');
    console.log('posted');
  };

  return (
    <div className='post-form'>
      <h1 className='post-question'>What's on your mind?</h1>
      <div className='input-div'>
        <span className='form-span-type'>Title</span>
        <input
          type='text'
          onChange={({ target: { value } }) => setPostTitle(value)}
          value={postTitle}
          className='title-input'
          placeholder='Hello world'
        />
      </div>
      <div className='input-div'>
        <span className='form-span-type'>Content</span>
        <textarea
          value={postContent}
          onChange={({ target: { value } }) => setPostContent(value)}
          className='content-input'
          placeholder='Content Here'
        />
      </div>
      <div className='post-btn-div'>
        <button
          disabled={postTitle === '' || postContent === ''}
          onClick={handleClick}
          className='post-btn'
          type='button'
          >
          Create
        </button>
      </div>
    </div>
  );
}
