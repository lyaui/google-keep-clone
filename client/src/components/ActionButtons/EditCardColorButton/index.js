import { useState } from 'react';
import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SEditCardColor, SColor } from 'components/ActionButtons/EditCardColorButton/style.js';

const EditCardColorButton = ({ id }) => {
  const [showTooltip, setShowTooltip] = useState(false);
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
    <SEditCardColor width={140}>
      {Object.keys(PALETTE_COLORS).map((color) => {
        return (
          <Tippy key={color} content={TOOLTIP_TEXT[`COLOR_${color}`]}>
            <SColor color={PALETTE_COLORS[color]} onClick={selectColorHandler(color)}>
              {currentMemo.color === color && <Icon.Check />}
            </SColor>
          </Tippy>
        );
      })}
    </SEditCardColor>
  );

  return (
    <CustomTippy
      render={() => palette}
      interactive={true}
      visible={showTooltip}
      onClickOutside={() => setShowTooltip(false)}
    >
      <Tippy content={TOOLTIP_TEXT.PALETTE}>
        <ButtonRound size={34} onClick={showPaletteHandler}>
          <Icon.Palette />
        </ButtonRound>
      </Tippy>
    </CustomTippy>
  );
};

export default EditCardColorButton;
