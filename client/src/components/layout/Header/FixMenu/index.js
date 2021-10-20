import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { useUI, updateUserSettings } from 'contexts/UI-context/index.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const FixMenu = () => {
  const { UIState, UIDispatch } = useUI();
  const { isLoading, isFixedMenu } = UIState;

  const toggleIsFixedMenuHandler = async () => {
    await updateUserSettings(UIDispatch, { settings: { isFixedMenu: !isFixedMenu } });
  };

  return (
    <Tippy content={TOOLTIP_TEXT.MENU}>
      <ButtonRound size={44} onClick={toggleIsFixedMenuHandler} disabled={isLoading}>
        <Icon.Menu />
      </ButtonRound>
    </Tippy>
  );
};

export default FixMenu;
