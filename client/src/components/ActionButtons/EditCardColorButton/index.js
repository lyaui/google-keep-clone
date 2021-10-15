import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedColor, setSelectedColor] = useState(PALETTE_COLORS.DEFAULT);

  const selectColorHandler = (color) => () => {
    setSelectedColor(color);
    dispatch(memosActions.updateMemo({ color }));
  };

  const palette = (
    <SEditCardColor width={140}>
      {Object.values(PALETTE_COLORS).map((color) => (
        <SColor key={color} color={color} onClick={selectColorHandler(color)}>
          {selectedColor === color && <Icon.Check />}
        </SColor>
      ))}
    </SEditCardColor>
  );

  return (
    <span>
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
    </span>
  );
};

export default EditCardColorButton;
