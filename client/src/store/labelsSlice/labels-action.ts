import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';

import type { ResError, MemoLabel } from '@/types';
import { TOAST_TEXT } from '@/constants/toastText';
import {
  apiGetUserLabels,
  apiCreateLabel,
  apiUpdateLabel,
  apiDeleteLabel,
} from '@/apis/labels';

const DEFAULT_ERR_MSG = 'Unknown error';

export const getUserLabels = createAsyncThunk<
  MemoLabel[],
  null,
  { rejectValue: string }
>('labels/getUserLabels', async (_, { rejectWithValue }) => {
  try {
    const res = await apiGetUserLabels();
    if (!res.data.success) throw new Error();
    return res.data.labels;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) throw rejectWithValue(error.message);

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const addLabel = createAsyncThunk<
  MemoLabel,
  { name: string },
  { rejectValue: string }
>('labels/addLabel', async (payload, { rejectWithValue }) => {
  try {
    const res = await apiCreateLabel(payload);
    if (!res.data.success) throw new Error();
    return res.data.label;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) throw rejectWithValue(error.message);

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const updateLabel = createAsyncThunk<
  MemoLabel,
  { labelId: string; payload: { name: string } },
  { rejectValue: string }
>('labels/updateLabel', async ({ labelId, payload }, { rejectWithValue }) => {
  try {
    const res = await apiUpdateLabel(labelId, payload);
    if (!res.data.success) throw new Error();

    toast(TOAST_TEXT.LABEL_UPDATE_SUCCESS);
    return res.data.label;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) throw rejectWithValue(error.message);

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});

export const deleteLabel = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('labels/deleteLabel', async (labelId, { rejectWithValue }) => {
  try {
    const res = await apiDeleteLabel(labelId);
    if (!res.data.success) throw new Error();

    toast(TOAST_TEXT.LABEL_UPDATE_SUCCESS);
    return labelId;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        (error as AxiosError<ResError>).response?.data?.message ||
        DEFAULT_ERR_MSG;
      return rejectWithValue(errorMessage);
    }

    if (error instanceof Error) throw rejectWithValue(error.message);

    return rejectWithValue(DEFAULT_ERR_MSG);
  }
});
