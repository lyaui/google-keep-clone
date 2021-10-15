import { configureStore } from '@reduxjs/toolkit';
import labelsReducer from 'store/labelsSlice';
import memosReducer from 'store/memosSlice';

const store = configureStore({
  reducer: {
    labels: labelsReducer,
    memos: memosReducer,
  },
});
export default store;
