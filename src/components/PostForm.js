import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, setPosts } from '../redux/postsSlice';
import { selectUser } from '../redux/userSlice';

export default function PostForm () {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  const handleClick = () => {
    const newPost = {
      id: 123,
      username: user,
      created_datetime: new Date().toISOString(),
      title: postTitle,
      content: postContent
    };

    dispatch(setPosts([newPost, ...posts]));
    setPostTitle('');
    setPostContent('');
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
