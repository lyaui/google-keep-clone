import { createSlice } from '@reduxjs/toolkit';
import { getUserLabels, addLabel } from 'store/labelsSlice/labels-action.js';

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
  },
});

export default labelsSlice.reducer;
