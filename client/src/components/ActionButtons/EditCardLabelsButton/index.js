import { useState } from 'react';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import EditLabels from 'components/EditLabels';

const EditCardLabelsButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const showTooltipHandler = (e) => {
    e.stopPropagation();
    setShowTooltip(true);
  };

  return (
    <CustomTippy
      render={() => <EditLabels />}
      interactive={true}
      visible={showTooltip}
      onClickOutside={() => setShowTooltip(false)}
    >
      <Tippy content={TOOLTIP_TEXT.LABEL}>
        <ButtonRound size={34} onClick={showTooltipHandler}>
          <Icon.LabelOutline />
        </ButtonRound>
      </Tippy>
    </CustomTippy>
  );
};

export default EditCardLabelsButton;
