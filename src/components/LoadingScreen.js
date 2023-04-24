import React from 'react';
import '../style/LoadingScreen.css';
import { codeleapLogo } from '../images';
import { useSelector } from 'react-redux';
import { selectLoading } from '../redux/loadingScreenSlice';

export default function LoadingScreen () {
  const isLoading = useSelector(selectLoading);
  const loadingClassName = isLoading ? 'loading-screen' : 'loading-screen-off';
  return (
    <div className={loadingClassName}>
      <img className='codeleap-img' src={codeleapLogo} alt='codeleap-logo' />
    </div>
  );
}
