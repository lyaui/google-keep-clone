import { createSlice } from '@reduxjs/toolkit';
import {
  getUserMemos,
  getUserMemosByLabelName,
  getUserMemoByMemoId,
  addMemo,
  updateMemo,
  deleteMemo,
} from 'store/memosSlice/memos-action.js';
import DUMMY_DATA from 'data/memos.js';

const INIT_MEMO = {
  title: '',
  content: '',
  images: [],
  isTaskList: false,
  isPinned: false,
  isArchived: false,
  links: [],
  labels: [],
  tasks: [],
  color: 'DEFAULT',
};

export const INIT_MEMOS_STATE = {
  isMemoUpdated: false,
  isLoading: false,
  errorMessage: '',
  memos: [...DUMMY_DATA],
  memo: INIT_MEMO,
};

const memosSlice = createSlice({
  name: 'memos',
  initialState: INIT_MEMOS_STATE,
  reducers: {
    setMemo(state, { payload: memo }) {
      state.memo = memo;
    },
    updateMemo(state, { payload }) {
      state.isMemoUpdated = true;
      state.memo = { ...state.memo, ...payload };
    },
    resetMemo(state) {
      state.memo = INIT_MEMOS_STATE.memo;
      state.isMemoUpdated = false;
    },
    addTask(state, { payload }) {
      const { preIndex, task } = payload;
      const tempArr = [...state.memo.tasks];
      tempArr.join();
      tempArr.splice(preIndex, 0, task);
      state.memo.tasks = tempArr;
    },
    updateTask(state, { payload: task }) {
      const index = state.memo.tasks.findIndex((item) => item.id === task.id).sort((a, b) => a.up);
      state.memo.tasks[index] = task;
    },
    removeTask(state, { payload: taskId }) {
      state.memo.tasks = state.memo.tasks.filter((task) => task.id !== taskId);
    },
    addImage(state, { payload: newImage }) {
      state.memo.images = [...state.memo.images, newImage];
    },
    removeImage(state, { payload: imageIndex }) {
      state.memo.images = state.memo.images.filter((image, index) => index !== imageIndex);
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

    // getUserMemosByLabelName
    [getUserMemosByLabelName.pending](state) {
      state.isLoading = true;
    },
    [getUserMemosByLabelName.fulfilled](state, { payload: memos }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memos = memos;
    },
    [getUserMemosByLabelName.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // getUserMemoByMemoId
    [getUserMemoByMemoId.pending](state) {
      state.isLoading = true;
    },
    [getUserMemoByMemoId.fulfilled](state, { payload: memo }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memo = memo;
    },
    [getUserMemoByMemoId.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // addMemo
    [addMemo.pending](state) {
      state.isLoading = true;
    },
    [addMemo.fulfilled](state, { payload: memo }) {
      state.isLoading = false;
      state.errorMessage = '';
      // TODO ascend or descend
      state.memos = [memo, ...state.memos];
      state.memo = INIT_MEMO;
    },
    [addMemo.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // updateMemo
    [updateMemo.pending](state) {
      state.isLoading = true;
    },
    [updateMemo.fulfilled](state, { payload: updatedMemo }) {
      state.isLoading = false;
      state.errorMessage = '';
      const memoIndex = state.memos.findIndex((memo) => memo._id === updatedMemo._id);
      state.memos[memoIndex] = updatedMemo;
      state.memos = state.memos.sort((a, b) => (a.updatedAt > b.updatedAt ? -1 : 1));
    },
    [updateMemo.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // delete memo
    [deleteMemo.pending](state) {
      state.isLoading = true;
    },
    [deleteMemo.fulfilled](state, { payload: memoId }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memos = state.memos.filter((memo) => memo._id !== memoId);
    },
    [deleteMemo.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },
  },
});

export const memosActions = memosSlice.actions;
export default memosSlice.reducer;
