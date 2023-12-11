import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { useUI, updateUserSettings } from '@/contexts/UI-context/index.jsx';
import { VIEW_MODE } from '@/constants/UI';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

const EditViewModeButton = () => {
  const { UIState, UIDispatch } = useUI();
  const { isLoading } = UIState;

  const isGrid = UIState.layout === VIEW_MODE.GRID;

  const toggleViewModeHandler = async () => {
    const viewMode = isGrid ? VIEW_MODE.LIST : VIEW_MODE.GRID;
    await updateUserSettings(UIDispatch, { settings: { layout: viewMode } });
  };

  return (
    <Tippy content={isGrid ? TOOLTIP_TEXT.VIEW_LIST : TOOLTIP_TEXT.VIEW_GRID}>
      <Button size="large" onClick={toggleViewModeHandler} disabled={isLoading}>
        {isGrid ? <Icon.List /> : <Icon.Grid />}
      </Button>
    </Tippy>
  );
};

export default EditViewModeButton;
