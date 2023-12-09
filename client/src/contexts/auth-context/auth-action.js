import { AUTH_TYPES } from '@/constants/auth.js';
import { UI_TYPES } from '@/constants/UI.js';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from '@/constants/toastText.js';
import { apiSignup, apiLogin, apiLogout } from '@/apis/user.js';

const setStoredData = (user) => {
  // 10 days
  const tokenExpirationDate = new Date(
    new Date().getTime() + 1000 * 60 * 60 * 24 * 10
  );
  return {
    userId: user._id,
    userName: user.name,
    userEmail: user.email,
    token: user.token,
    isLoggedIn: !!user.token,
    expiration: tokenExpirationDate.toISOString(),
  };
};

export const signup = async (dispatch, payload) => {
  try {
    dispatch({ type: AUTH_TYPES.SIGNUP_REQUEST });
    const res = await apiSignup(payload);
    const { success, user } = res.data;
    const storedData = setStoredData(user);

    if (success) {
      dispatch({
        type: AUTH_TYPES.SIGNUP_SUCCESS,
        payload: storedData,
      });

      localStorage.setItem('userInfo', JSON.stringify(storedData));
      toast(TOAST_TEXT.SIGNUP_SUCCESS);
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: AUTH_TYPES.SIGNUP_FAIL,
      payload: { errorMessage },
    });

    if (err.response.status === 422)
      return toast(TOAST_TEXT.SIGNUP_ACCOUNT_EXISTED);

    toast(TOAST_TEXT.SIGNUP_FAIL);
    return err.response;
  }
};

export const login = async (dispatch, payload) => {
  try {
    dispatch({ type: AUTH_TYPES.LOGIN_REQUEST });
    const res = await apiLogin(payload);
    const { success, user } = res.data;
    const storedData = setStoredData(user);

    if (success) {
      dispatch({
        type: AUTH_TYPES.LOGIN_SUCCESS,
        payload: storedData,
      });

      localStorage.setItem('userInfo', JSON.stringify(storedData));
      toast(TOAST_TEXT.LOGIN_SUCCESS);
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: AUTH_TYPES.LOGIN_FAIL,
      payload: { errorMessage },
    });

    toast(TOAST_TEXT.LOGIN_FAIL);
    return err.response;
  }
};

export const googleLogin = async (dispatch, payload) => {
  const storedData = setStoredData(payload);
  dispatch({
    type: AUTH_TYPES.GOOGLE_LOGIN_SUCCESS,
    payload: storedData,
  });
  localStorage.setItem('userInfo', JSON.stringify(storedData));
  toast(TOAST_TEXT.LOGIN_SUCCESS);
};

export const logout = async (dispatch) => {
  try {
    dispatch({ type: AUTH_TYPES.LOGOUT_REQUEST });
    const res = await apiLogout();

    if (res.data.success) {
      dispatch({ type: AUTH_TYPES.LOGOUT_SUCCESS });
      dispatch({ type: UI_TYPES.SETTINGS_RESET });
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userSettings');

      toast(TOAST_TEXT.LOGOUT_SUCCESS);
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: AUTH_TYPES.LOGOUT_FAIL,
      payload: { errorMessage },
    });
    toast(TOAST_TEXT.LOGOUT_FAIL);
    return err.response;
  }
};
