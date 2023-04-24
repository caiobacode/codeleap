import React from 'react';
import formatDate from '../utils/formatDate';
import '../style/Post.css';
import { DeleteIconSVG, EditIconSVG } from '../images/';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { setAlertModeOn } from '../redux';

export default function Post ({ postInfo }) {
  const { username, created_datetime, title, content } = postInfo;
  const actualUser = useSelector(selectUser);
  const formatedPostDate = formatDate(created_datetime);

  const dispatch = useDispatch();

  return (
    <div className='post-div'>
      <div className='post-title-btns-div'>
        <span className='post-title'>{title}</span>
        {
          username === actualUser &&
          <div className='delete-edit-post-div'>
            <button
              type='button'
              className='type-btn'
              onClick={() => dispatch(setAlertModeOn({ ...postInfo, type: 'delete' }))}
            >
              <DeleteIconSVG />
            </button>
            <button
              type='button'
              className='type-btn'
              onClick={() => dispatch(setAlertModeOn({ ...postInfo, type: 'edit' }))}
            >
              <EditIconSVG />
            </button>
        </div>
        }
      </div>
      <div className='post-details-div'>
        <p className='post-username'>@{username}</p>
        <span className='post-date'>{formatedPostDate}</span>
      </div>
      <div className='post-content-div'>
        <span className='content-text'>{content}</span>
      </div>
    </div>
  );
}
