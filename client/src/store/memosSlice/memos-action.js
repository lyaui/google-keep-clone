import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import {
  apiGetMemos,
  //   apiGetMemosByLabelId,
  apiCreateMemo,
  //   apiUpdateMemo,
  apiDeleteMemo,
} from 'apis/memos.js';

export const getUserMemos = createAsyncThunk(
  'memos/getMemos',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await apiGetMemos(userId);
      if (!res.data.success) throw new Error();
      return res.data.memos;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const addMemo = createAsyncThunk('memos/addMemo', async (payload, { rejectWithValue }) => {
  try {
    const res = await apiCreateMemo(payload);
    if (!res.data.success) throw new Error();

    toast(TOAST_TEXT.MEMO_ADD_SUCCESS);
    return res.data.memo;
  } catch (err) {
    toast(TOAST_TEXT.MEMO_ADD_FAIL);
    return rejectWithValue(err.response.data.message);
  }
});

export const deleteMemo = createAsyncThunk(
  'labels/updateLabels',
  async (memoId, { rejectWithValue }) => {
    try {
      const res = await apiDeleteMemo(memoId);
      if (!res.data.success) throw new Error();

      toast(TOAST_TEXT.MEMO_DELETE_SUCCESS);
      return memoId;
    } catch (err) {
      toast(TOAST_TEXT.MEMO_DELETE_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  },
);
