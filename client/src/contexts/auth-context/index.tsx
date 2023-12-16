import { createContext, useReducer, useContext } from 'react';
import type { ReactNode, Dispatch } from 'react';
import {
  signup,
  login,
  logout,
  googleLogin,
} from '@/contexts/auth-context/auth-action';
import {
  authReducer,
  type AuthAction,
} from '@/contexts/auth-context/auth-reducer';

export interface AuthState {
  isLoading: boolean;
  errorMessage: string;
  isLoggedIn: boolean;
  userId: string;
  userName: string;
  userEmail: string;
  token: string;
  expiration: string; // TODO time
}

interface AuthContext {
  authState: AuthState;
  authDispatch: Dispatch<AuthAction>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const INIT_AUTH_STATES: AuthState = {
  isLoading: false,
  errorMessage: '',
  isLoggedIn: false,
  userId: '',
  userName: '',
  userEmail: '',
  token: '',
  expiration: '',
} as const;

export const initAuthStates: AuthState = JSON.parse(
  localStorage.getItem('userInfo') || JSON.stringify(INIT_AUTH_STATES)
);

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, authDispatch] = useReducer(authReducer, initAuthStates);
  const contextValue = { authState, authDispatch };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export { signup, login, logout, googleLogin };
