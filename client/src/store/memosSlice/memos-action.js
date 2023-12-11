import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from '@/constants/toastText';
import {
  apiGetUserMemos,
  apiGetMemosByLabelName,
  apiGetUserMemoByMemoId,
  apiCreateMemo,
  apiUpdateMemo,
  apiDeleteMemo,
  apiGetLinksInfo,
} from '@/apis/memos';
import { apiUploadImage } from '@/apis/upload';
import axios from 'axios';

export const getUserMemos = createAsyncThunk(
  'memos/getUserMemos',
  async (query, { rejectWithValue, signal }) => {
    const source = axios.CancelToken.source();
    const abortedMessage = 'thunk is canceled';
    signal.addEventListener('abort', () => {
      source.cancel(abortedMessage);
    });

    try {
      const res = await apiGetUserMemos(query, { cancelToken: source.token });
      if (!res.data.success) throw new Error();
      return res.data.memos;
    } catch (err) {
      if (err.message === abortedMessage) return;

      toast(TOAST_TEXT.MEMOS_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getUserMemosByLabelName = createAsyncThunk(
  'memos/getUserMemosByLabelName',
  async ({ labelName, query }, { rejectWithValue, signal }) => {
    const source = axios.CancelToken.source();
    const abortedMessage = 'thunk is canceled';
    signal.addEventListener('abort', () => {
      source.cancel(abortedMessage);
    });

    try {
      const res = await apiGetMemosByLabelName(
        { labelName, query },
        { cancelToken: source.token }
      );
      if (!res.data.success) throw new Error();
      return res.data.memos;
    } catch (err) {
      if (err.message === abortedMessage) return;

      toast(TOAST_TEXT.MEMOS_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getUserMemoByMemoId = createAsyncThunk(
  'memos/getUserMemoByMemoId',
  async (memoId, { rejectWithValue, signal }) => {
    const source = axios.CancelToken.source();
    const abortedMessage = 'thunk is canceled';
    signal.addEventListener('abort', () => {
      source.cancel(abortedMessage);
    });

    try {
      const res = await apiGetUserMemoByMemoId(memoId, {
        cancelToken: source.token,
      });
      if (!res.data.success) throw new Error();
      return res.data.memo;
    } catch (err) {
      if (err.message === abortedMessage) return;

      toast(TOAST_TEXT.MEMOS_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const addMemo = createAsyncThunk(
  'memos/addMemo',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiCreateMemo(payload);
      if (!res.data.success) throw new Error();

      toast(TOAST_TEXT.MEMO_ADD_SUCCESS);
      return res.data.memo;
    } catch (err) {
      toast(TOAST_TEXT.MEMO_ADD_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  }
);

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
  }
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
  }
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
  }
);

export const uploadMemoImage = createAsyncThunk(
  'memos/uploadMemoImage',
  async (imagePath, { rejectWithValue }) => {
    try {
      const res = await apiUploadImage(imagePath);
      if (!res.data.success) throw new Error();

      return res.data.image;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);
