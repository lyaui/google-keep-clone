export const INIT_AUTH_STATES = {
  isLoading: false,
  errorMessage: '',
  isLoggedIn: false,
  userId: '',
  userName: '',
  userEmail: '',
  token: '',
};

export const AUTH_TYPES = {
  // SIGNUP
  SIGNUP_REQUEST: 'SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_FAIL: 'SIGNUP_FAIL',

  // LOGIN
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',

  // GOOGLE_LOGIN
  GOOGLE_LOGIN_REQUEST: 'GOOGLE_LOGIN_REQUEST',
  GOOGLE_LOGIN_SUCCESS: 'GOOGLE_LOGIN_SUCCESS',
  GOOGLE_LOGIN_FAIL: 'GOOGLE_LOGIN_FAIL',

  // LOGOUT
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'LOGOUT_FAIL',
};