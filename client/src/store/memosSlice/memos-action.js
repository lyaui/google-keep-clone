import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  apiGetMemos,
  //   apiGetMemosByLabelId,
  //   apiCreateMemo,
  //   apiUpdateMemo,
  //   apiDeleteMemo,
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

// export const addLabel = createAsyncThunk(
//   'labels/addLabels',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const res = await apiCreateLabel(payload);
//       if (!res.data.success) throw new Error();
//       return res.data.labels;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   },
// );

// export const updateLabel = createAsyncThunk(
//   'labels/updateLabels',
//   async ({ labelId, payload }, { rejectWithValue }) => {
//     try {
//       const res = await apiUpdateLabel(labelId, payload);
//       if (!res.data.success) throw new Error();
//       return res.data.labels;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   },
// );

// export const deleteLabel = createAsyncThunk(
//   'labels/updateLabels',
//   async (labelId, { rejectWithValue }) => {
//     try {
//       const res = await apiDeleteLabel(labelId);
//       if (!res.data.success) throw new Error();
//       return labelId;
//     } catch (err) {
//       return rejectWithValue(err.response.data.message);
//     }
//   },
// );
