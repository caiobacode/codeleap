import React from 'react';
import '../style/Alerts.css';
import { useDispatch } from 'react-redux';
import { logoutUser, setAlertModeOff, setLoadingOff, setLoadingOn } from '../redux';
import { useNavigate } from 'react-router-dom';

export default function LogoutingAlert ({ props: { isOn, alertType } }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alertClassName = (isOn && alertType === 'logout')
    ? 'alert-div'
    : 'alert-div off';

  const divClassName = (isOn && alertType === 'logout')
    ? 'deleting-div'
    : 'deleting-off';

  async function logoutActualUser () {
    dispatch(setAlertModeOff());
    dispatch(setLoadingOn());

    setTimeout(() => {
      dispatch(setLoadingOff());
    }, 1500);

    setTimeout(() => {
      localStorage.removeItem('codeleap-user');
      dispatch(logoutUser());
      navigate('/signup');
    }, 250);
  }

  return (
    <div className={alertClassName}>
      <div className={divClassName}>
        <p className='delete-alert-text'>Are you sure you want to logout?</p>
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
            onClick={logoutActualUser}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
