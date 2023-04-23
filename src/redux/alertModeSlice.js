import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'alertMode',
  initialState: {
    isOn: false,
    updatingPost: {},
    alertType: ''
  },
  reducers: {
    setAlertModeOn (state, { payload }) {
      return { isOn: true, updatingPost: payload, alertType: payload.type };
    },
    setAlertModeOff () {
      return { isOn: false, updatingPost: {}, alertType: '' };
    }
  }
});

export const { setAlertModeOn, setAlertModeOff } = slice.actions;

export const selectAlertMode = state => state.alertMode;

export default slice.reducer;
