import React, { useState } from 'react';

export default function SignupForm (history) {
  const [username, setUsername] = useState('');

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
          onClick={() => console.log('btn-enabled')}
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
