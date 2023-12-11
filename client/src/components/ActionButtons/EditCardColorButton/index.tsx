import { useState, type MouseEvent } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import type { Color, Theme } from '@/types';
import { useUpdateMemo } from '@/hooks/updateMemo-hook';
import { useUI } from '@/contexts/UI-context';
import CustomTippy from '@tippyjs/react/headless';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';
import {
  SEditCardColor,
  SColor,
} from '@/components/ActionButtons/EditCardColorButton/style';

const Palette = ({ id }: { id: string }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const { UIState } = useUI();
  const colorArr = Object.keys(PALETTE_COLORS) as Color[];

  const selectColorHandler =
    (color: Color) => (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      dispatchUpdateMemo({ color });
    };

  return (
    <SEditCardColor>
      {colorArr.map((color) => {
        const colorValue =
          PALETTE_COLORS[color as Color][UIState.theme as Theme];
        const tooltipTitle = TOOLTIP_TEXT[`COLOR_${color}`] || '';
        return (
          <Tippy key={color} content={tooltipTitle}>
            <SColor
              color={colorValue}
              borderColor={
                color !== 'DEFAULT'
                  ? colorValue
                  : UIState.theme === 'LIGHT'
                    ? 'var(--color-gray-200)'
                    : 'var(--color-gray-700)'
              }
              onClick={selectColorHandler(color)}
            >
              {currentMemo.color === color && <Icon.Check />}
            </SColor>
          </Tippy>
        );
      })}
    </SEditCardColor>
  );
};

const EditCardColorButton = ({ id }: { id: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const showPaletteHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowTooltip(true);
  };

  return (
    <div>
      <CustomTippy
        render={() => <Palette id={id} />}
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
