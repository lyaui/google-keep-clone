import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { isEqual, pick } from 'lodash';
import axios, { AxiosError } from 'axios';

import type {
  ResError,
  DraftMemo,
  Memo,
  MemoLink,
  MemoImage,
  Params,
} from '@/types';
import { INIT_MEMO, type MemoState } from '@/store/memosSlice';
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

const DEFAULT_ERR_MSG = 'Unknown error';

export const getUserMemos = createAsyncThunk<
  Memo[],
  Params,
  { rejectValue: string }
>('memos/getUserMemos', async (query, { rejectWithValue, signal }) => {
  try {
    const res = await apiGetUserMemos(query, { signal });

    if (!res.data.success) throw new Error();
    return res.data.memos;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast(TOAST_TEXT.MEMOS_FAIL);
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;

      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) {
      throw rejectWithValue(error.message);
    }

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const getUserMemosByLabelName = createAsyncThunk<
  Memo[],
  { labelName: string; query: Params }
>(
  'memos/getUserMemosByLabelName',
  async (
    { labelName, query }: { labelName: string; query: Params },
    { rejectWithValue, signal }
  ) => {
    try {
      const res = await apiGetMemosByLabelName(
        { labelName, query },
        { signal }
      );
      if (!res.data.success) throw new Error();
      return res.data.memos;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast(TOAST_TEXT.MEMOS_FAIL);
        const errorMessage =
          (error as AxiosError<ResError>).response?.data?.message ||
          DEFAULT_ERR_MSG;
        return rejectWithValue(errorMessage);
      }

      if (error instanceof Error) {
        throw rejectWithValue(error.message);
      }

      return rejectWithValue(DEFAULT_ERR_MSG);
    }
  }
);

export const getUserMemoByMemoId = createAsyncThunk<
  Memo,
  string,
  { rejectValue: string }
>('memos/getUserMemoByMemoId', async (memoId, { rejectWithValue, signal }) => {
  try {
    const res = await apiGetUserMemoByMemoId(memoId, {
      signal,
    });
    if (!res.data.success) throw new Error();
    return res.data.memo;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast(TOAST_TEXT.MEMOS_FAIL);
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) {
      throw rejectWithValue(error.message);
    }

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const addMemo = createAsyncThunk<
  Memo,
  DraftMemo,
  { rejectValue: string }
>(
  'memos/addMemo',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiCreateMemo(payload);
      if (!res.data.success) throw new Error();

      toast(TOAST_TEXT.MEMO_ADD_SUCCESS);
      return res.data.memo;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast(TOAST_TEXT.MEMO_ADD_FAIL);
        const errorMessage =
          (error as AxiosError<ResError>).response?.data?.message ||
          DEFAULT_ERR_MSG;
        return rejectWithValue(errorMessage);
      }

      if (error instanceof Error) {
        throw rejectWithValue(error.message);
      }

      return rejectWithValue(DEFAULT_ERR_MSG);
    }
  },
  {
    condition: (memo) => {
      const pickItems = ['title', 'content', 'images', 'links', 'tasks'];
      const isEmptyMemo = isEqual(
        pick(memo, pickItems),
        pick(INIT_MEMO, pickItems)
      );

      if (isEmptyMemo) return false;
    },
  }
);

export const updateMemo = createAsyncThunk<
  Memo,
  { memoId: string; payload: Memo },
  { rejectValue: string; state: { memos: MemoState } }
>(
  'memos/updateMemo',
  async ({ memoId, payload }, { rejectWithValue }) => {
    try {
      const res = await apiUpdateMemo(memoId, payload);
      if (!res.data.success) throw new Error();

      return res.data.memo;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast(TOAST_TEXT.MEMO_UPDATE_FAIL);
        const errorMessage =
          (error as AxiosError<ResError>).response?.data?.message ||
          DEFAULT_ERR_MSG;
        return rejectWithValue(errorMessage);
      }

      if (error instanceof Error) {
        throw rejectWithValue(error.message);
      }

      return rejectWithValue(DEFAULT_ERR_MSG);
    }
  },
  {
    condition: ({ memoId, payload }, { getState }) => {
      const { memos } = getState().memos;
      const foundMemo = memos.find((_memo) => _memo._id === memoId);
      const isMemoEqual = isEqual(foundMemo, payload);

      if (isMemoEqual) return false;
    },
  }
);

export const deleteMemo = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('memos/deleteMemo', async (memoId, { rejectWithValue }) => {
  try {
    const res = await apiDeleteMemo(memoId);
    if (!res.data.success) throw new Error();

    toast(TOAST_TEXT.MEMO_DELETE_SUCCESS);
    return memoId;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast(TOAST_TEXT.MEMO_DELETE_FAIL);
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) {
      throw rejectWithValue(error.message);
    }

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const addLinksInfo = createAsyncThunk<
  MemoLink[],
  string[],
  { rejectValue: string }
>('memos/addLinksInfo', async (links, { rejectWithValue }) => {
  try {
    const res = await apiGetLinksInfo(links);
    if (!res.data.success) throw new Error();

    return res.data.links;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) {
      throw rejectWithValue(error.message);
    }

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const uploadMemoImage = createAsyncThunk<
  MemoImage,
  string,
  { rejectValue: string }
>('memos/uploadMemoImage', async (imagePath, { rejectWithValue }) => {
  try {
    const res = await apiUploadImage(imagePath);
    if (!res.data.success) throw new Error();

    return res.data.image;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) {
      throw rejectWithValue(error.message);
    }

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});
