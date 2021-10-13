import { createSlice } from '@reduxjs/toolkit';
import { getUserLabels } from 'store/labelsSlice/labels-action.js';

const INIT_LABELS_STATE = {
  isLoading: false,
  errorMessage: '',
  labels: [],
};

const labelsSlice = createSlice({
  name: 'labels',
  initialState: INIT_LABELS_STATE,
  reducers: {
    addLabel(state, action) {
      state.labels = [...state.labels, action.payload];
    },
    removeLabel(state, action) {
      state.labels = state.labels.filter((label) => label.id !== action.payload);
    },
    uploadLabel(state) {},
    toggleCounter(state) {},
  },
  extraReducers: {
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
  },
});

export const { addLabel, removeLabel, uploadLabel, toggleCounter } = labelsSlice.actions;
export default labelsSlice.reducer;
