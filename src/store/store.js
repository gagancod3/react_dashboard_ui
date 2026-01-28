import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice.js';
// import searchReducer from './slices/searchSlice';
// import filtersReducer from './slices/filtersSlice.js';

export const store = configureStore({
  reducer: {
    // search: searchReducer,
    // auth: authReducer,
    // filters: filtersReducer,
  },
});