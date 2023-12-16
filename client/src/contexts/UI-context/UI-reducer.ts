import { INIT_UI_STATES, type UIState } from '@/contexts/UI-context';
import { UI_TYPES } from '@/constants/UI';

export type UIAction =
  | { type: typeof UI_TYPES.SETTINGS_REQUEST; payload: null }
  | { type: typeof UI_TYPES.SETTINGS_UPDATE_REQUEST; payload: null }
  | { type: typeof UI_TYPES.SETTINGS_SUCCESS; payload: Partial<UIState> }
  | { type: typeof UI_TYPES.SETTINGS_UPDATE_SUCCESS; payload: Partial<UIState> }
  | { type: typeof UI_TYPES.SETTINGS_FAIL; payload: { errorMessage: string } }
  | {
      type: typeof UI_TYPES.SETTINGS_UPDATE_FAIL;
      payload: { errorMessage: string };
    }
  | { type: typeof UI_TYPES.SETTINGS_RESET; payload: null };

export const UIReducer = (state = INIT_UI_STATES, action: UIAction) => {
  const { type, payload } = action;

  switch (type) {
    case UI_TYPES.SETTINGS_REQUEST:
    case UI_TYPES.SETTINGS_UPDATE_REQUEST:
      return { ...state, isLoading: true, errorMessage: '' };

    case UI_TYPES.SETTINGS_SUCCESS:
    case UI_TYPES.SETTINGS_UPDATE_SUCCESS:
      return { ...state, isLoading: false, errorMessage: '', ...payload };

    case UI_TYPES.SETTINGS_FAIL:
    case UI_TYPES.SETTINGS_UPDATE_FAIL:
      return { ...state, isLoading: false, errorMessage: payload.errorMessage };

    case UI_TYPES.SETTINGS_RESET:
      return INIT_UI_STATES;

    default:
      return state;
  }
};
