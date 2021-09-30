import { useState } from 'react';
import CustomTooltip from 'components/UI/CustomTooltip';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { TOOLTIP_NAME } from 'constants/UI.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import { useUIContextVal } from 'contexts/ui-context.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SEditCardColor, SColor } from 'components/ActionButtons/EditCardColorButton/style.js';

const EditCardColorButton = () => {
  const { CTX_TOOLTIP } = useUIContextVal();
  const [selectedColor, setSelectedColor] = useState(PALETTE_COLORS.DEFAULT);

  const selectColorHandler = (color) => () => {
    setSelectedColor(color);
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
    <CustomTooltip renderElement={palette} name={TOOLTIP_NAME.PALETTE} text={TOOLTIP_TEXT.PALETTE}>
      <ButtonRound size={34} onClick={CTX_TOOLTIP.showTooltipHandler(TOOLTIP_NAME.PALETTE)}>
        <Icon.Palette />
      </ButtonRound>
    </CustomTooltip>
  );
};

export default EditCardColorButton;
