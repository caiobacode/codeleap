import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    signupUser (state, { payload }) {
      return payload;
    }
  }
});

export const { signupUser } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;
