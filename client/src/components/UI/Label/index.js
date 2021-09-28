import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon.js';
import { SLabel, SLabelButton } from 'components/UI/Label/style.js';

const Label = ({ children, isShowMoreLabel = false }) => {
  const clickRemoveHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <SLabel isShowMoreLabel={isShowMoreLabel}>
      {children}
      <Tippy content={TOOLTIP_TEXT.CANCEL_LABEL}>
        <SLabelButton>
          <Icon.Clear onClick={clickRemoveHandler} />
        </SLabelButton>
      </Tippy>
    </SLabel>
  );
};

export default Label;
