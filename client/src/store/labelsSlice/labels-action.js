import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetLabels, apiCreateLabel } from 'apis/labels.js';

export const getUserLabels = createAsyncThunk(
  'labels/getLabels',
  async (userId, { rejectWithValue }) => {
    try {
      const res = await apiGetLabels(userId);
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
