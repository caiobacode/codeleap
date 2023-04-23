import React from 'react';
import '../style/Alerts.css';
import { useDispatch } from 'react-redux';
import { setAlertModeOff } from '../redux';

export default function EditingAlert () {
  const dispatch = useDispatch();
  return (
    <div className='alert-div'>
      <div className='editing-div'>
        <h1>Voce esta editando um post</h1>
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
