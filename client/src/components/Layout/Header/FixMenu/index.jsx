import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { useUI, updateUserSettings } from '@/contexts/UI-context';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

const FixMenu = () => {
  const { UIState, UIDispatch } = useUI();
  const { isLoading, isFixedMenu } = UIState;

  const toggleIsFixedMenuHandler = async () => {
    await updateUserSettings(UIDispatch, {
      settings: { isFixedMenu: !isFixedMenu },
    });
  };

  return (
    <Tippy content={TOOLTIP_TEXT.MENU}>
      <Button size={44} onClick={toggleIsFixedMenuHandler} disabled={isLoading}>
        <Icon.Menu />
      </Button>
    </Tippy>
  );
};

export default FixMenu;
