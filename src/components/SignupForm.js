import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupForm () {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
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
