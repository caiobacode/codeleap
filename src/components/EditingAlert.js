import React, { useEffect, useState } from 'react';
import '../style/Alerts.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertModeOff } from '../redux';
import { updatePost } from '../actions';
import { selectPosts, setPosts } from '../redux/postsSlice';

export default function EditingAlert ({ props: { isOn, alertType, updatingPost } }) {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    setSelectedPost();
  }, [updatingPost]);

  function setSelectedPost () {
    setNewTitle(updatingPost.title);
    setNewContent(updatingPost.content);
  }

  const alertClassName = (isOn && alertType === 'edit')
    ? 'alert-div'
    : 'alert-div off';

  const divClassName = (isOn && alertType === 'edit')
    ? 'editing-div'
    : 'editing-off';

  async function updateActualPost () {
    const newPost = await updatePost({ title: newTitle, content: newContent }, updatingPost.id);
    const newPosts = [...posts];

    const postIndex = posts.findIndex((p) => p.id === newPost.id);
    newPosts[postIndex] = { ...newPost };

    dispatch(setPosts(newPosts));
    dispatch(setAlertModeOff());
  }

  return (
    <div className={alertClassName}>
      <div className={divClassName}>
        <span className='edit-item-text'>Edit item</span>
        <div className='input-div'>
          <span className='form-span-type'>Title</span>
          <input
            type='text'
            onChange={({ target: { value } }) => setNewTitle(value)}
            value={newTitle}
            className='title-input'
            placeholder='Hello world'
          />
        </div>
        <div className='input-div'>
          <span className='form-span-type'>Content</span>
          <textarea
            value={newContent}
            onChange={({ target: { value } }) => setNewContent(value)}
            className='content-input'
            placeholder='Content Here'
          />
        </div>
        <div className='update-post-btns-div'>
          <button
            className='cancel-update-btn'
            type='button'
            onClick={() => dispatch(setAlertModeOff())}
          >
            Cancel
          </button>
          <button
            className='update-post-btn'
            type='button'
            onClick={updateActualPost}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
