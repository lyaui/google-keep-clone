import { createSlice } from '@reduxjs/toolkit';
import {
  getUserLabels,
  addLabel,
  updateLabel,
  deleteLabel,
} from '@/store/labelsSlice/labels-action.js';

const INIT_LABELS_STATE = {
  isLoading: false,
  errorMessage: '',
  labels: [],
};

const labelsSlice = createSlice({
  name: 'labels',
  initialState: INIT_LABELS_STATE,
  extraReducers: {
    // getUserLabels
    [getUserLabels.pending](state) {
      state.isLoading = true;
    },
    [getUserLabels.fulfilled](state, { payload: labels }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.labels = labels;
    },
    [getUserLabels.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // addLabel
    [addLabel.pending](state) {
      state.isLoading = true;
    },
    [addLabel.fulfilled](state, { payload: label }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.labels = [...state.labels, label];
    },
    [addLabel.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // updateLabel
    [updateLabel.pending](state) {
      state.isLoading = true;
    },
    [updateLabel.fulfilled](state, { payload: label }) {
      state.isLoading = false;
      state.errorMessage = '';
      const index = state.labels.findIndex((item) => item._id === label._id);
      state.labels[index] = label;
    },
    [updateLabel.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },

    // deleteLabel
    [deleteLabel.pending](state) {
      state.isLoading = true;
    },
    [deleteLabel.fulfilled](state, { payload: labelId }) {
      state.isLoading = false;
      state.errorMessage = '';
      state.labels = state.labels.filter((label) => label._id !== labelId);
    },
    [deleteLabel.rejected](state, { payload: errorMessage }) {
      state.isLoading = false;
      state.errorMessage = errorMessage;
    },
  },
});

export default labelsSlice.reducer;
