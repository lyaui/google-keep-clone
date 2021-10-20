import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { useUI, updateUserSettings } from 'contexts/UI-context/index.js';
import { VIEW_MODE } from 'constants/UI.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const ViewMode = () => {
  const { UIState, UIDispatch } = useUI();
  const { isLoading } = UIState;

  const isGrid = UIState.layout === VIEW_MODE.GRID;

  const toggleViewModeHandler = async () => {
    const viewMode = isGrid ? VIEW_MODE.LIST : VIEW_MODE.GRID;
    await updateUserSettings(UIDispatch, { settings: { layout: viewMode } });
  };

  return (
    <Tippy content={isGrid ? TOOLTIP_TEXT.VIEW_GRID : TOOLTIP_TEXT.VIEW_LIST}>
      <ButtonRound size={40} onClick={toggleViewModeHandler} disabled={isLoading}>
        {isGrid ? <Icon.Grid /> : <Icon.List />}
      </ButtonRound>
    </Tippy>
  );
};

export default ViewMode;
