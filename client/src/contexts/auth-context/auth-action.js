import { AUTH_TYPES } from 'constants/auth.js';
import { apiSignup, apiLogin, apiLogout } from 'apis/user.js';

export const signup = async (dispatch, payload) => {
  try {
    dispatch({ type: AUTH_TYPES.SIGNUP_REQUEST });
    const res = await apiSignup(payload);
    const { user } = res.data;

    if (res.data.success) {
      dispatch({
        type: AUTH_TYPES.SIGNUP_SUCCESS,
        payload,
      });
      localStorage.setItem('userInfo', JSON.stringify(user));
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: AUTH_TYPES.SIGNUP_FAIL,
      payload: errorMessage,
    });
    return err.response;
  }
};

export const login = async (dispatch, payload) => {
  try {
    dispatch({ type: AUTH_TYPES.LOGIN_REQUEST });
    const res = await apiLogin(payload);
    const { user } = res.data;

    if (res.data.success) {
      dispatch({
        type: AUTH_TYPES.LOGIN_SUCCESS,
        payload: {
          userId: user._id,
          userName: user.name,
          userEmail: user.email,
          token: user.token,
        },
      });
      localStorage.setItem('userInfo', JSON.stringify(user));
      return res.data;
    }
  } catch (err) {
    const errorMessage = err.response.data.message;
    dispatch({
      type: AUTH_TYPES.LOGIN_FAIL,
      payload: { errorMessage },
    });
    return err.response;
  }
};

// export const googleLogin = async (dispatch) => {
//   try {
//     dispatch({ type: AUTH_TYPES.GOOGLE_LOGIN_REQUEST });
//     const res = await apiGoogleLogin();
//     const user = res.data;

//     dispatch({
//       type: AUTH_TYPES.GOOGLE_LOGIN_SUCCESS,
//       payload: {
//         isLoggedIn: true,
//         userId: user._id,
//         username: user.name,
//         userEmail: user.email,
//         token: user.token,
//       },
//     });
//     localStorage.setItem('userInfo', JSON.stringify(user));
//   } catch (err) {
//     dispatch({
//       type: AUTH_TYPES.GOOGLE_LOGIN_FAIL,
//       payload: err,
//     });
//   }
// };

export const logout = async (dispatch) => {
  try {
    dispatch({ type: AUTH_TYPES.LOGOUT_REQUEST });
    const res = await apiLogout();

    if (res.data.success) {
      dispatch({
        type: AUTH_TYPES.LOGOUT_SUCCESS,
      });
      localStorage.removeItem('userInfo');
      return res.data;
    }
  } catch (err) {
    dispatch({
      type: AUTH_TYPES.LOGOUT_FAIL,
    });
    return err.response;
  }
};
