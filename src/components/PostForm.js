import React from 'react';

export default function PostForm () {
  return (
    <div className='post-form'>
      <h1 className='post-question'>What's on your mind?</h1>
      <div className='input-div'>
        <span className='span-type'>Title</span>
        <input
          type='text'
          className='title-input'
          placeholder='Hello world'
        />
      </div>
      <div className='input-div'>
        <span className='span-type'>Content</span>
        <textarea
          className='content-input'
          placeholder='Content Here'
        />
      </div>
      <div className='post-btn-div'>
        <button
          disabled={1 + 2 === 2}
          className='post-btn'
          type='button'
          >
          Create
        </button>
      </div>
    </div>
  );
}
