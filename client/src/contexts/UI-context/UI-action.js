import { UI_TYPES } from 'constants/UI.js';
import { apiGetUserSettings, apiUpdateUserSettings } from 'apis/user.js';

export const getUserSettings = async (dispatch, payload) => {
  try {
    dispatch({ type: UI_TYPES.SETTINGS_REQUEST });
    const res = await apiGetUserSettings(payload.userId);
    const { settings } = res.data;

    if (res.data.success) {
      dispatch({
        type: UI_TYPES.SETTINGS_SUCCESS,
        payload: payload.setting,
      });
      localStorage.setItem('userSettings', JSON.stringify(settings));
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: UI_TYPES.SETTINGS_FAIL,
      payload: { errorMessage },
    });
    return err.response;
  }
};

export const updateUserSettings = async (dispatch, payload) => {
  try {
    dispatch({ type: UI_TYPES.SETTINGS_UPDATE_REQUEST });
    const res = await apiUpdateUserSettings(payload.userId, payload.settings);
    const { settings } = res.data;

    if (res.data.success) {
      dispatch({
        type: UI_TYPES.SETTINGS_UPDATE_SUCCESS,
        payload: settings,
      });
      localStorage.setItem('userSettings', JSON.stringify(settings));
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: UI_TYPES.SETTINGS_UPDATE_FAIL,
      payload: errorMessage,
    });
    return err.response;
  }
};
