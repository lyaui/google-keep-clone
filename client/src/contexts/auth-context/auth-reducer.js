import { INIT_AUTH_STATES, AUTH_TYPES } from 'constants/auth.js';

export const authReducer = (state = INIT_AUTH_STATES, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_TYPES.SIGNUP_REQUEST:
    case AUTH_TYPES.LOGIN_REQUEST:
    case AUTH_TYPES.GOOGLE_LOGIN_REQUEST:
    case AUTH_TYPES.LOGOUT_REQUEST:
      return { ...state, isLoading: true, errorMessage: '' };

    case AUTH_TYPES.SIGNUP_SUCCESS:
    case AUTH_TYPES.LOGIN_SUCCESS:
    case AUTH_TYPES.GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        userId: payload.userId,
        userName: payload.userName,
        userEmail: payload.userEmail,
        token: payload.token,
        errorMessage: '',
      };

    case AUTH_TYPES.LOGOUT_SUCCESS:
      return {};

    case AUTH_TYPES.SIGNUP_FAIL:
    case AUTH_TYPES.LOGIN_FAIL:
    case AUTH_TYPES.GOOGLE_LOGIN_FAIL:
    case AUTH_TYPES.LOGOUT_FAIL:
      return { ...state, isLoading: false, errorMessage: payload.errorMessage };

    default:
      return state;
  }
};
