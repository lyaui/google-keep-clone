import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetUserLabels, apiCreateLabel, apiUpdateLabel, apiDeleteLabel } from 'apis/labels.js';

export const getUserLabels = createAsyncThunk(
  'labels/getLabels',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await apiGetUserLabels(userId);
      if (!res.data.success) throw new Error();
      return res.data.labels;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  },
);

export const addLabel = createAsyncThunk(
  'labels/addLabels',
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
  'labels/updateLabels',
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
  'labels/updateLabels',
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
