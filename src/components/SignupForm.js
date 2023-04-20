import React from 'react';

export default function SignupForm () {
  return (
    <div className='signup-form'>
      <h1 className='signup-title'>Welcome to CodeLeap network!</h1>
      <div>
      <span className='signup-text'>Please enter your username</span>
      <input placeholder='John doe' className='signup-input' type='text'></input>
      </div>
      <div className='btn-div'>
        <button className='signup-btn' type='button'>ENTER</button>
      </div>
    </div>
  );
}
