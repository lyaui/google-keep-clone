import { createSlice } from '@reduxjs/toolkit';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import DUMMY_DATA from 'data/memos.js';

const INIT_MEMOS_STATE = {
  isLoading: false,
  errorMessage: '',
  memos: [...DUMMY_DATA],
};

const memosSlice = createSlice({
  name: 'memos',
  initialState: INIT_MEMOS_STATE,
  extraReducers: {
    // getUserMemos
    [getUserMemos.pending](state) {
      state.isLoading = true;
    },
    [getUserMemos.fulfilled](state, { payload: memos }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memos = memos;
    },
    [getUserMemos.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },
  },
});

export default memosSlice.reducer;
