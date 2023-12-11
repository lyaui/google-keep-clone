import { useState } from 'react';
import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import { useUI } from '@/contexts/UI-context';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { PALETTE_COLORS } from '@/constants/paletteColors.js';
import * as Icon from '@/components/UI/Icon/index.jsx';
import Button from '@/components/UI/Buttons';
import {
  SEditCardColor,
  SColor,
} from '@/components/ActionButtons/EditCardColorButton/style.jsx';

const EditCardColorButton = ({ id }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { UIState } = useUI();
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const showPaletteHandler = (e) => {
    e.stopPropagation();
    setShowTooltip(true);
  };

  const selectColorHandler = (color) => (e) => {
    e.stopPropagation();
    dispatchUpdateMemo({ color });
  };

  const palette = (
    <SEditCardColor>
      {Object.keys(PALETTE_COLORS).map((color) => {
        return (
          <Tippy key={color} content={TOOLTIP_TEXT[`COLOR_${color}`]}>
            <SColor
              style={{
                '--color': PALETTE_COLORS[color][UIState.theme],
                '--border':
                  color !== 'DEFAULT'
                    ? PALETTE_COLORS[color][UIState.theme]
                    : UIState.theme === 'LIGHT'
                      ? 'var(--color-gray-200)'
                      : UIState.theme === 'DARK'
                        ? 'var(--color-gray-700)'
                        : PALETTE_COLORS[color][UIState.theme],
              }}
              onClick={selectColorHandler(color)}
            >
              {currentMemo.color === color && <Icon.Check />}
            </SColor>
          </Tippy>
        );
      })}
    </SEditCardColor>
  );

  return (
    <div>
      <CustomTippy
        render={() => palette}
        interactive={true}
        visible={showTooltip}
        onClickOutside={() => setShowTooltip(false)}
      >
        <Tippy content={TOOLTIP_TEXT.PALETTE}>
          <Button size="medium" onClick={showPaletteHandler}>
            <Icon.Palette />
          </Button>
        </Tippy>
      </CustomTippy>
    </div>
  );
};

export default EditCardColorButton;
