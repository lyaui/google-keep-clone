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
import type { DraftMemo, Memo } from '@/types';

export interface MemoState {
  isLoading: boolean;
  errorMessage: string;
  memos: Memo[];
  memo: Memo | DraftMemo;
}

export const INIT_MEMO: DraftMemo = {
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
  extraReducers: (builder) => {
    builder
      // getUserMemos
      .addCase(getUserMemos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserMemos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.memos = action.payload;
      })
      .addCase(getUserMemos.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // getUserMemosByLabelName
      .addCase(getUserMemosByLabelName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserMemosByLabelName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.memos = action.payload;
      })
      .addCase(getUserMemosByLabelName.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // getUserMemoByMemoId
      .addCase(getUserMemoByMemoId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserMemoByMemoId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.memo = action.payload;
        if (state.memos.length === 0) {
          state.memos = [action.payload];
        }
      })
      .addCase(getUserMemoByMemoId.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // addMemo
      .addCase(addMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addMemo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        // TODO ascend or descend
        state.memos = [action.payload, ...state.memos];
        state.memo = { ...INIT_MEMO } as DraftMemo;
      })
      .addCase(addMemo.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })

      // updateMemo
      .addCase(updateMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMemo.fulfilled, (state, action) => {
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
      })
      .addCase(updateMemo.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // delete memo
      .addCase(deleteMemo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMemo.fulfilled, (state, action) => {
        const memoId = action.payload;
        state.isLoading = false;
        state.errorMessage = '';
        state.memos = state.memos.filter((memo) => memo._id !== memoId);
      })
      .addCase(deleteMemo.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // addLinksInfo
      .addCase(addLinksInfo.pending, () => {})
      .addCase(addLinksInfo.fulfilled, (state, action) => {
        const links = action.payload;
        const currentLinks = [...state.memo.links];
        links.forEach((_link) => {
          if (
            !state.memo.links.find((stateLink) => stateLink.url === _link.url)
          ) {
            currentLinks.push(_link);
          }
        });
        state.memo.links = currentLinks;
        state.errorMessage = '';
      })
      .addCase(addLinksInfo.rejected, (state, action) => {
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // uploadMemoImage
      .addCase(uploadMemoImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadMemoImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.memo.images = [...state.memo.images, action.payload];
      })
      .addCase(uploadMemoImage.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      });
  },
});

export const memosActions = memosSlice.actions;
export default memosSlice.reducer;
