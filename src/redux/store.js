import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postsSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer
  }
});