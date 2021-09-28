import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import { useUIContextVal } from 'contexts/ui-context.js';
import * as Icon from 'components/UI/Icon.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import SettingTooltip from 'components/UI/SettingTooltip';
import {
  SEditCardColor,
  SEditCardColorUnit,
} from 'components/ActionButtons/EditCardColorButton/style.js';

const EditCardColorButton = () => {
  const { CTX_TOOLTIP } = useUIContextVal();
  const [selectedColor, setSelectedColor] = useState(PALETTE_COLORS.DEFAULT);

  const selectColorHandler = (color) => () => {
    setSelectedColor(color);
  };

  const palette = (
    <SEditCardColor>
      {Object.values(PALETTE_COLORS).map((color) => (
        <SEditCardColorUnit key={color} color={color} onClick={selectColorHandler(color)}>
          {selectedColor === color && <Icon.Check />}
        </SEditCardColorUnit>
      ))}
    </SEditCardColor>
  );

  return (
    <SettingTooltip renderElement={palette}>
      <Tippy content={TOOLTIP_TEXT.PALETTE}>
        <ButtonRound size={34} onClick={CTX_TOOLTIP.showTooltipHandler}>
          <Icon.Palette />
        </ButtonRound>
      </Tippy>
    </SettingTooltip>
  );
};

export default EditCardColorButton;
