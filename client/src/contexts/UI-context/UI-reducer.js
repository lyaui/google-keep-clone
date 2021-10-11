import { INIT_UI_STATES, UI_TYPES } from 'constants/UI.js';

const userSettingsFromStorage = localStorage.getItem('userSettings')
  ? JSON.parse(localStorage.getItem('userSettings'))
  : INIT_UI_STATES;

export const UIReducer = (state = userSettingsFromStorage, action) => {
  const { type, payload } = action;

  switch (type) {
    case UI_TYPES.SETTINGS_REQUEST:
    case UI_TYPES.SETTINGS_UPDATE_REQUEST:
      return { ...state, isLoading: true, errorMessage: '' };

    case UI_TYPES.SETTINGS_SUCCESS:
    case UI_TYPES.SETTINGS_UPDATE_SUCCESS:
      return { ...state, isLoading: false, errorMessage: '', ...payload };

    case UI_TYPES.SETTINGS_FAIL:
    case UI_TYPES.SETTINGS_UPDATE_FAIL:
      return { ...state, isLoading: false, errorMessage: payload.errorMessage };

    case UI_TYPES.SETTINGS_RESET:
      return {};

    default:
      return state;
  }
};
