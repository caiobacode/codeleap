import React from 'react';
import '../style/Alerts.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAlertModeOff } from '../redux';
import { selectPosts, setPosts } from '../redux/postsSlice';
import { deletePost } from '../actions';

export default function DeletingAlert ({ props: { isOn, alertType, updatingPost } }) {
  const dispatch = useDispatch();
  const allPosts = useSelector(selectPosts);

  const alertClassName = (isOn && alertType === 'delete')
    ? 'alert-div'
    : 'alert-div off';

  const divClassName = (isOn && alertType === 'delete')
    ? 'deleting-div'
    : 'deleting-off';

  async function deleteActualPost () {
    const newPosts = allPosts.filter((p) => p.id !== updatingPost.id);
    await deletePost(updatingPost.id);
    dispatch(setPosts(newPosts));
    dispatch(setAlertModeOff());
  }

  return (
    <div className={alertClassName}>
      <div className={divClassName}>
        <h1 className='delete-alert-text'>Are you sure you want to delete this item?</h1>
        <div className='delete-alert-btns-div'>
          <button
            className='cancel-update-btn'
            type='button'
            onClick={() => dispatch(setAlertModeOff())}
          >
            Cancel
          </button>
          <button
            className='delete-post-btn'
            type='button'
            onClick={deleteActualPost}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
