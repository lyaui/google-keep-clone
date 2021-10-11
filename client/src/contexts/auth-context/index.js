import { createContext, useReducer, useContext } from 'react';
import { INIT_AUTH_STATES } from 'constants/auth.js';
import { signup, login, logout } from 'contexts/auth-context/auth-action.js';
import { authReducer } from 'contexts/auth-context/auth-reducer.js';

const initAuthStates = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : INIT_AUTH_STATES;

const AuthContext = createContext({ authState: initAuthStates, authDispatch() {} });

// export Provider
export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initAuthStates);
  const contextValue = { authState, authDispatch };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// export context value
export const useAuth = () => useContext(AuthContext);

// export actions
export { signup, login, logout };
