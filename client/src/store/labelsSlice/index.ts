import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

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

const labelsSlice = createSlice({
  name: 'labels',
  initialState: INIT_LABELS_STATE,
  reducers: {},
  extraReducers: {
    // getUserLabels
    [getUserLabels.pending](state) {
      state.isLoading = true;
    },
    [getUserLabels.fulfilled](state, action: PayloadAction<MemoLabel[]>) {
      state.isLoading = false;
      state.errorMessage = '';
      state.labels = action.payload;
    },
    [getUserLabels.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // addLabel
    [addLabel.pending](state) {
      state.isLoading = true;
    },
    [addLabel.fulfilled](state, action: PayloadAction<MemoLabel>) {
      state.isLoading = false;
      state.errorMessage = '';
      state.labels = [...state.labels, action.payload];
    },
    [addLabel.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // updateLabel
    [updateLabel.pending](state) {
      state.isLoading = true;
    },
    [updateLabel.fulfilled](state, action: PayloadAction<MemoLabel>) {
      const label = action.payload;
      state.isLoading = false;
      state.errorMessage = '';
      const index = state.labels.findIndex((item) => item._id === label._id);
      state.labels[index] = label;
    },
    [updateLabel.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },

    // deleteLabel
    [deleteLabel.pending](state) {
      state.isLoading = true;
    },
    [deleteLabel.fulfilled](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = '';

      const labelId = action.payload;
      state.labels = state.labels.filter((label) => label._id !== labelId);
    },
    [deleteLabel.rejected](state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },
});

export default labelsSlice.reducer;
