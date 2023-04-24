import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, setPosts } from '../redux/postsSlice';
import { selectUser } from '../redux/userSlice';
import insertPost from '../actions/insertPost';

export default function PostForm () {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  const handleClick = async () => {
    const newPost = {
      username: user,
      title: postTitle,
      content: postContent
    };
    const postWithIdAndDate = await insertPost(newPost);

    dispatch(setPosts([postWithIdAndDate, ...posts]));
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
          maxLength='50'
          onChange={({ target: { value } }) => setPostTitle(value)}
          value={postTitle}
          className='title-input'
          placeholder='Hello world'
        />
      </div>
      <div className='input-div'>
        <span className='form-span-type'>Content</span>
        <textarea
          maxLength='450'
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
