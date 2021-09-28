import { Fragment, useState } from 'react';
import Tippy from '@tippyjs/react';
import CustomTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon.js';
import {
  SEditCardColor,
  SEditCardColorUnit,
} from 'components/ActionButtons/EditCardColorButton/style.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const EditCardColorButton = () => {
  const [isPalettVisible, setIsPalettVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(PALETTE_COLORS.DEFAULT);

  const showPaletteHandler = () => setIsPalettVisible(true);
  const hidePaletteHandler = () => setIsPalettVisible(false);
  const selectColorHandler = (color) => () => {
    setSelectedColor(color);
  };

  const palette = (
    <SEditCardColor>
      {Object.values(PALETTE_COLORS).map((color) => (
        <SEditCardColorUnit color={color} onClick={selectColorHandler(color)}>
          {selectedColor === color && <Icon.Check />}
        </SEditCardColorUnit>
      ))}
    </SEditCardColor>
  );

  return (
    <Fragment>
      <CustomTippy
        render={() => palette}
        visible={isPalettVisible}
        interactive={true}
        onClickOutside={hidePaletteHandler}
      >
        <Tippy content={TOOLTIP_TEXT.PALETTE}>
          <ButtonRound
            size={34}
            onClick={isPalettVisible ? hidePaletteHandler : showPaletteHandler}
          >
            <Icon.Palette />
          </ButtonRound>
        </Tippy>
      </CustomTippy>
    </Fragment>
  );
};

export default EditCardColorButton;
