import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { updateMemo } from 'store/memosSlice/memos-action.js';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SEditCardColor, SColor } from 'components/ActionButtons/EditCardColorButton/style.js';

const EditCardColorButton = ({ id }) => {
  const dispatch = useDispatch();
  const { memos, memo, isEditingNewMemo, isLoading } = useSelector((state) => state.memos);
  const [showTooltip, setShowTooltip] = useState(false);

  const showPaletteHandler = (e) => {
    e.stopPropagation();
    setShowTooltip(true);
  };

  const selectColorHandler = (color) => (e) => {
    e.stopPropagation();
    if (isLoading) return;
    isEditingNewMemo
      ? dispatch(memosActions.updateMemo({ color }))
      : dispatch(updateMemo({ memoId: id, payload: { color } }));
  };

  const palette = (
    <SEditCardColor width={140}>
      {Object.keys(PALETTE_COLORS).map((color) => {
        const currentMemo = memos.find((memo) => memo._id === id) || memo;
        return (
          <SColor key={color} color={PALETTE_COLORS[color]} onClick={selectColorHandler(color)}>
            {currentMemo.color === color && <Icon.Check />}
          </SColor>
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
          {isEditingNewMemo}
        </ButtonRound>
      </Tippy>
    </CustomTippy>
  );
};

export default EditCardColorButton;
