import { INIT_AUTH_STATES, type AuthState } from '@/contexts/auth-context';
import { AUTH_TYPES } from '@/constants/auth';

export type AuthAction =
  | { type: typeof AUTH_TYPES.SIGNUP_REQUEST; payload: null }
  | { type: typeof AUTH_TYPES.LOGIN_REQUEST; payload: null }
  | { type: typeof AUTH_TYPES.GOOGLE_LOGIN_REQUEST; payload: null }
  | { type: typeof AUTH_TYPES.LOGOUT_REQUEST; payload: null }
  | { type: typeof AUTH_TYPES.SIGNUP_SUCCESS; payload: AuthState }
  | { type: typeof AUTH_TYPES.LOGIN_SUCCESS; payload: AuthState }
  | { type: typeof AUTH_TYPES.GOOGLE_LOGIN_SUCCESS; payload: AuthState }
  | { type: typeof AUTH_TYPES.LOGOUT_SUCCESS; payload: null }
  | { type: typeof AUTH_TYPES.SIGNUP_FAIL; payload: { errorMessage: string } }
  | { type: typeof AUTH_TYPES.LOGIN_FAIL; payload: { errorMessage: string } }
  | {
      type: typeof AUTH_TYPES.GOOGLE_LOGIN_FAIL;
      payload: { errorMessage: string };
    }
  | { type: typeof AUTH_TYPES.LOGOUT_FAIL; payload: { errorMessage: string } };

export const authReducer = (state: AuthState, action: AuthAction) => {
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
      return payload
        ? {
            ...state,
            isLoggedIn: !!payload.token,
            isLoading: false,
            userId: payload.userId,
            userName: payload.userName,
            userEmail: payload.userEmail,
            token: payload.token,
            expiration: payload.expiration,
            errorMessage: '',
          }
        : state;

    case AUTH_TYPES.LOGOUT_SUCCESS:
      return INIT_AUTH_STATES;

    case AUTH_TYPES.SIGNUP_FAIL:
    case AUTH_TYPES.LOGIN_FAIL:
    case AUTH_TYPES.GOOGLE_LOGIN_FAIL:
    case AUTH_TYPES.LOGOUT_FAIL:
      return payload
        ? { ...state, isLoading: false, errorMessage: payload.errorMessage }
        : state;

    default:
      return state;
  }
};
