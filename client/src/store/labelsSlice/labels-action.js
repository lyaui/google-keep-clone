import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiGetLabels } from 'apis/labels.js';

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
