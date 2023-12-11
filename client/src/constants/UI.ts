export const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
} as const;

export const VIEW_MODE = {
  GRID: 'GRID',
  LIST: 'LIST',
} as const;

export const SORT = {
  ASCEND: 'ASCEND',
  DESCEND: 'DESCEND',
} as const;

export const UI_TYPES = {
  // USER_SETTINGS
  SETTINGS_REQUEST: 'SETTINGS_REQUEST',
  SETTINGS_SUCCESS: 'SETTINGS_SUCCESS',
  SETTINGS_FAIL: 'SETTINGS_FAIL',
  SETTINGS_RESET: 'SETTINGS_RESET',

  // SETTINGS_UPDATE
  SETTINGS_UPDATE_REQUEST: 'LOGIN_REQUEST',
  SETTINGS_UPDATE_SUCCESS: 'LOGIN_SUCCESS',
  SETTINGS_UPDATE_FAIL: 'LOGIN_FAIL',
} as const;

export const INIT_UI_STATES = {
  isLoading: false,
  errorMessage: '',
  theme: THEME.LIGHT,
  layout: VIEW_MODE.GRID,
  sort: SORT.DESCEND,
  isFixedMenu: false,
};
