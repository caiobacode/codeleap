import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    signupUser (state, { payload }) {
      return payload;
    },
    logoutUser () { return ''; }
  }
});

export const { signupUser, logoutUser } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;
