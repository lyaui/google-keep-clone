import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { useUIContextVal } from 'contexts/ui-context.js';
import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const FixMenu = () => {
  const { CTX_FIXMENU } = useUIContextVal();

  return (
    <Tippy content={TOOLTIP_TEXT.MENU}>
      <ButtonRound size={44} onClick={CTX_FIXMENU.ToggleMenuHandler}>
        <Icon.Menu />
      </ButtonRound>
    </Tippy>
  );
};

export default FixMenu;
