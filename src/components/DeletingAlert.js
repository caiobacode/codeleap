import React from 'react';
import '../style/Alerts.css';
import { useDispatch } from 'react-redux';
import { setAlertModeOff } from '../redux';

export default function DeletingAlert () {
  const dispatch = useDispatch();
  return (
    <div className='alert-div'>
     <div className='deleting-div'>
      <h1>Voce esta deletando um post</h1>
      <button
        type='button'
        onClick={() => dispatch(setAlertModeOff())}
      >
        Cancelar
      </button>
    </div>
   </div>
  );
}
