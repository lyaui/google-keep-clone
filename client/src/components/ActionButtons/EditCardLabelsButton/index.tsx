import { useState, type MouseEvent } from 'react';
import CustomTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';
import EditLabels from '@/components/EditLabels';

const EditCardLabelsButton = ({ id }: { id?: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const showTooltipHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowTooltip(true);
  };

  return (
    <div>
      <CustomTippy
        render={() => <EditLabels id={id} />}
        interactive={true}
        visible={showTooltip}
        onClickOutside={() => setShowTooltip(false)}
      >
        <Tippy content={TOOLTIP_TEXT.LABEL}>
          <Button size="medium" onClick={showTooltipHandler}>
            <Icon.LabelOutline />
          </Button>
        </Tippy>
      </CustomTippy>
    </div>
  );
};

export default EditCardLabelsButton;
