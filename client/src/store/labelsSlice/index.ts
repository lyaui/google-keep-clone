import { createSlice } from '@reduxjs/toolkit';

import {
  getUserLabels,
  addLabel,
  updateLabel,
  deleteLabel,
} from '@/store/labelsSlice/labels-action';
import { MemoLabel } from '@/types';

interface LabelsState {
  isLoading: boolean;
  errorMessage: string;
  labels: MemoLabel[];
}

const INIT_LABELS_STATE = {
  isLoading: false,
  errorMessage: '',
  labels: [],
} as LabelsState;

/*
  rejectWithValue cannot be inferred (unknown)
  => in rejected case, PayloadAction<string> not work
  => let TS infer the action type according to the createAsyncThunk
*/

const labelsSlice = createSlice({
  name: 'labels',
  initialState: INIT_LABELS_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getUserLabels
      .addCase(getUserLabels.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserLabels.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.labels = action.payload;
      })
      .addCase(getUserLabels.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // addLabel
      .addCase(addLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addLabel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';
        state.labels = [...state.labels, action.payload];
      })
      .addCase(addLabel.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // updateLabel
      .addCase(updateLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLabel.fulfilled, (state, action) => {
        const label = action.payload;
        state.isLoading = false;
        state.errorMessage = '';
        const index = state.labels.findIndex((item) => item._id === label._id);
        state.labels[index] = label;
      })
      .addCase(updateLabel.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      })
      // deleteLabel
      .addCase(deleteLabel.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteLabel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = '';

        const labelId = action.payload;
        state.labels = state.labels.filter((label) => label._id !== labelId);
      })
      .addCase(deleteLabel.rejected, (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === 'string') {
          state.errorMessage = action.payload;
        }
      });
  },
});

export default labelsSlice.reducer;
