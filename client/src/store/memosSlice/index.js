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
    },
    addMemoLabel(state, { payload: label }) {
      state.memo.labels = [...state.memo.labels, label];
    },
    removeMemoLabel(state, { payload: labelId }) {
      state.memo.labels = state.memo.labels.filter((label) => label._id !== labelId);
    },
    resetMemo(state) {
      state.memo = INIT_MEMOS_STATE.memo;
    },
    addTask(state, { payload }) {
      const { preIndex, task } = payload;
      const tempArr = [...state.memo.tasks];
      tempArr.join();
      tempArr.splice(preIndex, 0, task);
      state.memo.tasks = tempArr;
    },
    updateTask(state, { payload: task }) {
      const index = state.memo.tasks.findIndex((item) => item.id === task.id);
      state.memo.tasks[index] = task;
    },
    removeTask(state, { payload: taskId }) {
      state.memo.tasks = state.memo.tasks.filter((task) => task.id !== taskId);
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
