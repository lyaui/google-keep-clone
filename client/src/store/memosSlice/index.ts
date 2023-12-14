import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  getUserMemos,
  getUserMemosByLabelName,
  getUserMemoByMemoId,
  addMemo,
  updateMemo,
  deleteMemo,
  addLinksInfo,
  uploadMemoImage,
} from '@/store/memosSlice/memos-action';
import type { DraftMemo, Memo, MemoImage, MemoLink } from '@/types';

interface MemoState {
  isLoading: boolean;
  errorMessage: string;
  memos: Memo[];
  memo: DraftMemo;
}

export const INIT_MEMO = {
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
  isLoading: false,
  errorMessage: '',
  memos: [],
  memo: INIT_MEMO,
} as MemoState;

const memosSlice = createSlice({
  name: 'memos',
  initialState: INIT_MEMOS_STATE,
  reducers: {
    setMemo(state, action: PayloadAction<DraftMemo>) {
      state.memo = action.payload;
    },
    updateMemo(state, action: PayloadAction<Partial<DraftMemo>>) {
      state.memo = { ...state.memo, ...action.payload };
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
    [getUserMemos.fulfilled](state, action: PayloadAction<Memo[]>) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memos = action.payload;
    },
    [getUserMemos.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // getUserMemosByLabelName
    [getUserMemosByLabelName.pending](state) {
      state.isLoading = true;
    },
    [getUserMemosByLabelName.fulfilled](state, action: PayloadAction<Memo[]>) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memos = action.payload;
    },
    [getUserMemosByLabelName.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // getUserMemoByMemoId
    [getUserMemoByMemoId.pending](state) {
      state.isLoading = true;
    },
    [getUserMemoByMemoId.fulfilled](state, action: PayloadAction<Memo>) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memo = action.payload;
      if (state.memos.length === 0) {
        state.memos = [action.payload];
      }
    },
    [getUserMemoByMemoId.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // addMemo
    [addMemo.pending](state) {
      state.isLoading = true;
    },
    [addMemo.fulfilled](state, action: PayloadAction<Memo>) {
      state.isLoading = false;
      state.errorMessage = '';
      // TODO ascend or descend
      state.memos = [action.payload, ...state.memos];
      state.memo = { ...INIT_MEMO } as DraftMemo;
    },
    [addMemo.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // updateMemo
    [updateMemo.pending](state) {
      state.isLoading = true;
    },
    [updateMemo.fulfilled](state, action: PayloadAction<Memo>) {
      const updatedMemo = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
      const memoIndex = state.memos.findIndex(
        (memo) => memo._id === updatedMemo._id
      );
      state.memos[memoIndex] = updatedMemo;
      state.memos = state.memos.sort((a, b) =>
        (a.updatedAt || '') > (b.updatedAt || '') ? -1 : 1
      );
    },
    [updateMemo.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // delete memo
    [deleteMemo.pending](state) {
      state.isLoading = true;
    },
    [deleteMemo.fulfilled](state, action: PayloadAction<string>) {
      const memoId = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
      state.memos = state.memos.filter((memo) => memo._id !== memoId);
    },
    [deleteMemo.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // addLinksInfo
    [addLinksInfo.pending]() {},
    [addLinksInfo.fulfilled](state, action: PayloadAction<MemoLink[]>) {
      const links = action.payload;
      const currentLinks = [...state.memo.links];
      links.forEach((link) => {
        if (!state.memo.links.find((stateLink) => stateLink.url === link.url)) {
          currentLinks.push(link);
        }
      });
      state.memo.links = currentLinks;
      state.errorMessage = '';
    },
    [addLinksInfo.rejected](state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
    [uploadMemoImage.pending](state) {
      state.isLoading = true;
    },
    [uploadMemoImage.fulfilled](state, action: PayloadAction<MemoImage>) {
      state.isLoading = false;
      state.errorMessage = '';
      state.memo.images = [...state.memo.images, action.payload];
    },
    [uploadMemoImage.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export const memosActions = memosSlice.actions;
export default memosSlice.reducer;
