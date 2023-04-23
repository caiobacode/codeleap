import React from 'react';
import '../style/Alerts.css';
import { useDispatch } from 'react-redux';
import { setAlertModeOff } from '../redux';

export default function EditingAlert ({ props: { isOn, alertType, updatingPost } }) {
  const dispatch = useDispatch();

  const alertClassName = (isOn && alertType === 'edit')
    ? 'alert-div'
    : 'alert-div off';

  const divClassName = (isOn && alertType === 'edit')
    ? 'editing-div'
    : 'editing-off';

  return (
    <div className={alertClassName}>
      <div className={divClassName}>
        <h1>editing post</h1>
        <button
          type='button'
          onClick={() => dispatch(setAlertModeOff())}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
