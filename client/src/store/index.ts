import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import labelsReducer from '@/store/labelsSlice';
import memosReducer from '@/store/memosSlice';
import memosApi from '@/store/apis/memoApi';

const store = configureStore({
  reducer: {
    labels: labelsReducer,
    memos: memosReducer,
    [memosApi.reducerPath]: memosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(memosApi.middleware);
  },
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
