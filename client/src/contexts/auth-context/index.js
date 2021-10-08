import { createContext, useReducer, useContext } from 'react';
import { INIT_AUTH_STATES } from 'constants/auth.js';
import { signup, login, googleLogin, logout } from 'contexts/auth-context/auth-action.js';
import { authReducer } from 'contexts/auth-context/auth-reducer.js';

const AuthContext = createContext({ authState: INIT_AUTH_STATES, authDispatch() {} });

// export Provider
export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, INIT_AUTH_STATES);
  const contextValue = { authState, authDispatch };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

// export context value
export const useAuth = () => useContext(AuthContext);

// export actions
export { signup, login, googleLogin, logout };
