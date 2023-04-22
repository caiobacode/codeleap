import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts (state, { payload }) {
      return [...payload];
    }
  }
});

export const { setPosts } = slice.actions;

export const selectPosts = state => state.posts;

export default slice.reducer;
