import { useEffect } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { useUI, updateUserSettings } from '@/contexts/UI-context';
import { THEME } from '@/constants/UI';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

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
      <Button size="large" onClick={toggleThemeHandler} disabled={isLoading}>
        {isLight ? <Icon.Moon /> : <Icon.Sun />}
      </Button>
    </Tippy>
  );
};

export default EditThemeButton;
