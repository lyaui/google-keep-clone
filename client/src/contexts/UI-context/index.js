import { createContext, useReducer, useContext } from 'react';
import { INIT_UI_STATES } from 'constants/UI.js';
import { getUserSettings, updateUserSettings } from 'contexts/UI-context/UI-action.js';
import { UIReducer } from 'contexts/UI-context/UI-reducer.js';

const initUIStates = localStorage.getItem('userSettings')
  ? JSON.parse(localStorage.getItem('userSettings'))
  : INIT_UI_STATES;

const UIContext = createContext({ UIState: initUIStates, UIDispatch() {} });

// export Provider
export const UIProvider = ({ children }) => {
  const [UIState, UIDispatch] = useReducer(UIReducer, initUIStates);
  const contextValue = { UIState, UIDispatch };
  return <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>;
};

// export context value
export const useUI = () => useContext(UIContext);

// export actions
export { getUserSettings, updateUserSettings };
