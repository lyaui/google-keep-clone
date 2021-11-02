import { createSlice } from '@reduxjs/toolkit';
import {
  getUserMemos,
  getUserMemosByLabelName,
  getUserMemoByMemoId,
  addMemo,
  updateMemo,
  deleteMemo,
  addLinksInfo,
  uploadMemoImage,
} from 'store/memosSlice/memos-action.js';

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
  memos: [],
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

    // addLinksInfo
    [addLinksInfo.pending](state) {
      state.isLoading = true;
    },
    [addLinksInfo.fulfilled](state, { payload: links }) {
      const currentLinks = [...state.memo.links];
      links.forEach((link) => {
        if (!state.memo.links.find((stateLink) => stateLink.url === link.url)) {
          currentLinks.push(link);
        }
      });
      state.memo.links = currentLinks;
      state.isLoading = false;
      state.errorMessage = '';
    },
    [addLinksInfo.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },
    [uploadMemoImage.pending](state) {
      state.isLoading = true;
    },
    [uploadMemoImage.fulfilled](state, { payload: image }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memo.images = [...state.memo.images, image];
    },
    [uploadMemoImage.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },
  },
});

export const memosActions = memosSlice.actions;
export default memosSlice.reducer;
