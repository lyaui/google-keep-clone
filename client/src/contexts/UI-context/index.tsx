import { createContext, useReducer, useContext } from 'react';
import type { ReactNode, Dispatch } from 'react';
import type { Theme, ViewMode, Sort } from '@/types';
import { THEME, VIEW_MODE, SORT } from '@/constants/UI';
import {
  getUserSettings,
  updateUserSettings,
} from '@/contexts/UI-context/UI-action';
import { UIReducer, type UIAction } from '@/contexts/UI-context/UI-reducer';

export interface UIState {
  isLoading: boolean;
  errorMessage: string;
  theme: Theme;
  layout: ViewMode;
  sort: Sort;
  isFixedMenu: boolean;
}

interface UIContext {
  UIState: UIState;
  UIDispatch: Dispatch<UIAction>;
}

interface UIProviderProps {
  children: ReactNode;
}

export const INIT_UI_STATES: UIState = {
  isLoading: false,
  errorMessage: '',
  theme: THEME.LIGHT,
  layout: VIEW_MODE.GRID,
  sort: SORT.DESCEND,
  isFixedMenu: false,
} as const;

const initUIStates: UIState = JSON.parse(
  localStorage.getItem('userSettings') || JSON.stringify(INIT_UI_STATES)
);

const UIContext = createContext<UIContext>({
  UIState: initUIStates,
  UIDispatch: () => {},
});

export const UIProvider = ({ children }: UIProviderProps) => {
  const [UIState, UIDispatch] = useReducer(UIReducer, initUIStates);
  const contextValue = { UIState, UIDispatch };
  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);

export { getUserSettings, updateUserSettings };
