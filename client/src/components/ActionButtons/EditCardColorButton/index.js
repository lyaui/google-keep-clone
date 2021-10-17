import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SEditCardColor, SColor } from 'components/ActionButtons/EditCardColorButton/style.js';

const EditCardColorButton = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);
  const [showTooltip, setShowTooltip] = useState(false);

  const selectColorHandler = (color) => () => dispatch(memosActions.updateMemo({ color }));

  const palette = (
    <SEditCardColor width={140}>
      {Object.keys(PALETTE_COLORS).map((color) => (
        <SColor key={color} color={PALETTE_COLORS[color]} onClick={selectColorHandler(color)}>
          {memo.color === color && <Icon.Check />}
        </SColor>
      ))}
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
        <ButtonRound size={34} onClick={() => setShowTooltip(true)}>
          <Icon.Palette />
        </ButtonRound>
      </Tippy>
    </CustomTippy>
  );
};

export default EditCardColorButton;
