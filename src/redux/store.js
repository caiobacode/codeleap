import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postsSlice';
import alertModeReducer from './alertModeSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    alertMode: alertModeReducer
  }
});
