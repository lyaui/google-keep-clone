import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import {
  apiGetUserMemos,
  apiGetMemosByLabelName,
  apiGetUserMemoByMemoId,
  apiCreateMemo,
  apiUpdateMemo,
  apiDeleteMemo,
  apiGetLinksInfo,
} from 'apis/memos.js';

export const getUserMemos = createAsyncThunk(
  'memos/getUserMemos',
  async (query, { rejectWithValue }) => {
    try {
      const res = await apiGetUserMemos(query);
      if (!res.data.success) throw new Error();
      return res.data.memos;
    } catch (err) {
      toast(TOAST_TEXT.MEMOS_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const getUserMemosByLabelName = createAsyncThunk(
  'memos/getUserMemosByLabelName',
  async (labelName, { rejectWithValue }) => {
    try {
      const res = await apiGetMemosByLabelName(labelName);
      if (!res.data.success) throw new Error();
      return res.data.memos;
    } catch (err) {
      toast(TOAST_TEXT.MEMOS_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const getUserMemoByMemoId = createAsyncThunk(
  'memos/getUserMemoByMemoId',
  async (memoId, { rejectWithValue }) => {
    try {
      const res = await apiGetUserMemoByMemoId(memoId);
      if (!res.data.success) throw new Error();

      return res.data.memo;
    } catch (err) {
      toast(TOAST_TEXT.MEMOS_FAIL);
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

export const updateMemo = createAsyncThunk(
  'memos/updateMemo',
  async ({ memoId, payload }, { rejectWithValue }) => {
    try {
      const res = await apiUpdateMemo(memoId, payload);
      if (!res.data.success) throw new Error();

      return res.data.memo;
    } catch (err) {
      toast(TOAST_TEXT.MEMO_UPDATE_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const deleteMemo = createAsyncThunk(
  'memos/deleteMemo',
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

export const addLinksInfo = createAsyncThunk(
  'memos/addLinksInfo',
  async (links, { rejectWithValue }) => {
    try {
      const res = await apiGetLinksInfo(links);
      if (!res.data.success) throw new Error();

      return res.data.links;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);
