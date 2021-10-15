import { createSlice } from '@reduxjs/toolkit';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import DUMMY_DATA from 'data/memos.js';

const INIT_MEMOS_STATE = {
  isLoading: false,
  errorMessage: '',
  memos: [...DUMMY_DATA],
  memo: {
    title: '',
    content: '',
    images: [],
    isPinned: false,
    isArchived: false,
    links: [],
    labels: [],
    tasks: [],
    color: 'DEFAULT',
  },
};

const memosSlice = createSlice({
  name: 'memos',
  initialState: INIT_MEMOS_STATE,
  reducers: {
    updateMemo(state, { payload }) {
      state.memo = { ...state.memo, ...payload };
      console.log(state.memo);
    },
    resetMemo(state) {
      state.memo = INIT_MEMOS_STATE.memo;
    },
  },
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

export const memosActions = memosSlice.actions;
export default memosSlice.reducer;
