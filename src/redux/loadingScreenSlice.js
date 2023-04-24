import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    setLoadingOn () { return true; },
    setLoadingOff () { return false; }
  }
});

export const { setLoadingOn, setLoadingOff } = slice.actions;

export const selectLoading = state => state.loading;

export default slice.reducer;
