import React from 'react';
import '../style/Header.css';
import logoutImg from '../images/logout.png';
import { useDispatch } from 'react-redux';
import { setAlertModeOn } from '../redux';

export default function Header () {
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <h1 className='header-text'>CodeLeap Network</h1>
      <button
        type='button'
        className='logout-btn'
        onClick={() => dispatch(setAlertModeOn({ type: 'logout' }))}
      >
        <img className='logout-img' src={logoutImg}></img>
      </button>
    </div>
  );
}
