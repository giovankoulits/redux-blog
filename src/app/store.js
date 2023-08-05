import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from '../features/Posts/postsSlice';

export const store = configureStore({
  reducer: { posts: postsSliceReducer },
});
