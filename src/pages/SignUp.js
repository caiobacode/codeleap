import React, { useEffect } from 'react';
import SignupForm from '../components/SignupForm';
import '../style/Signup.css';
import { getLocalStorage } from '../actions';
import { useNavigate } from 'react-router-dom';

export default function Signup () {
  const navigate = useNavigate();

  useEffect(() => {
    verifyLoggedUser();
  });

  function verifyLoggedUser () {
    const user = getLocalStorage('codeleap-user', 'not-found');
    if (user !== 'not-found') {
      navigate('/home');
    }
  }
  return (
    <div className='signup-div'>
      <SignupForm />
    </div>
  );
}
