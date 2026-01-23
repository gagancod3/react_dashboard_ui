import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice.js';
import openReducer from './slices/openSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    open: openReducer,
  },
});