import { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { useUI, updateUserSettings } from 'contexts/UI-context/index.js';
import { THEME } from 'constants/UI.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const EditThemeButton = () => {
  const { UIState, UIDispatch } = useUI();
  const { isLoading } = UIState;

  const isLight = UIState.theme === THEME.LIGHT;
  useEffect(() => {
    document.body.dataset.theme = UIState.theme;
  }, [UIState.theme]);

  const toggleThemeHandler = async () => {
    const theme = isLight ? THEME.DARK : THEME.LIGHT;
    await updateUserSettings(UIDispatch, { settings: { theme } });
  };

  return (
    <Tippy content={isLight ? TOOLTIP_TEXT.DARK_MODE : TOOLTIP_TEXT.LIGHT_MODE}>
      <ButtonRound size={40} onClick={toggleThemeHandler} disabled={isLoading}>
        {isLight ? <Icon.Moon /> : <Icon.Sun />}
      </ButtonRound>
    </Tippy>
  );
};

export default EditThemeButton;
