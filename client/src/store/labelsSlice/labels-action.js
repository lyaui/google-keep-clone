import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import { apiGetUserLabels, apiCreateLabel, apiUpdateLabel, apiDeleteLabel } from 'apis/labels.js';

export const getUserLabels = createAsyncThunk(
  'labels/getUserLabels',
  async (_, { rejectWithValue }) => {
    try {
      const res = await apiGetUserLabels();
      if (!res.data.success) throw new Error();
      return res.data.labels;
    } catch (err) {
      toast(TOAST_TEXT.LABELS_FAIL);
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const addLabel = createAsyncThunk(
  'labels/addLabel',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await apiCreateLabel(payload);
      if (!res.data.success) throw new Error();
      return res.data.labels;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const updateLabel = createAsyncThunk(
  'labels/updateLabel',
  async ({ labelId, payload }, { rejectWithValue }) => {
    try {
      const res = await apiUpdateLabel(labelId, payload);
      if (!res.data.success) throw new Error();
      return res.data.labels;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const deleteLabel = createAsyncThunk(
  'labels/deleteLabel',
  async (labelId, { rejectWithValue }) => {
    try {
      const res = await apiDeleteLabel(labelId);
      if (!res.data.success) throw new Error();
      return labelId;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);
