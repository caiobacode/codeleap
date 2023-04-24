import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn, signupUser } from '../redux';
import { setLocalStorage } from '../actions';

export default function SignupForm () {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLoadingOn());

    dispatch(signupUser(username));
    setLocalStorage('codeleap-user', username);

    setTimeout(() => {
      navigate('/home');
      dispatch(setLoadingOff());
    }, 1500);
  };

  return (
    <div className='signup-form'>
      <h1 className='signup-title'>Welcome to CodeLeap network!</h1>
      <div>
        <span className='signup-text'>Please enter your username</span>
        <input
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
          placeholder='John doe'
          className='signup-input'
          type='text'
        />
      </div>
      <div className='btn-div'>
        <button
          onClick={handleClick}
          disabled={username === ''}
          className='signup-btn'
          type='button'
        >
          ENTER
        </button>
      </div>
    </div>
  );
}
