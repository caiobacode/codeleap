import React from 'react';
import formatDate from '../utils/formatDate';
import '../style/Post.css';

export default function Post ({ postInfo }) {
  const { username, created_datetime, title, content } = postInfo;
  const formatedPostDate = formatDate(created_datetime);

  return (
    <div className='post-div'>
      <div className='post-title-div'>
        <p>{title}</p>
      </div>
      <div className='post-details-div'>
        <span className='post-username'>@{username}</span>
        <span className='post-date'>{formatedPostDate}</span>
      </div>
      <div className='post-content-div'>
        <text className='content-text'>{content}</text>
      </div>
    </div>
  );
}
