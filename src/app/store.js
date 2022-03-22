import { configureStore } from '@reduxjs/toolkit';
import conduitReducer from '../features/store/conduitSlice';

export const store = configureStore({
  reducer: {
    conduit: conduitReducer,
  },
});