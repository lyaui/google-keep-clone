import { configureStore } from '@reduxjs/toolkit';
import labelsReducer from 'store/labelsSlice';

const store = configureStore({
  reducer: {
    labels: labelsReducer,
  },
});
export default store;
