import { useDispatch } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelButton } from 'components/UI/Label/style.js';

const Label = ({ label, isShowMoreLabel = false, numOfMoreLabel = 0 }) => {
  const dispatch = useDispatch();
  const removeLabelHandler = (e) => {
    e.stopPropagation();
    dispatch(memosActions.removeMemoLabel(label._id));
  };
  return (
    <SLabel isShowMoreLabel={isShowMoreLabel}>
      {label && label.name}
      {numOfMoreLabel > 0 && `還有個 ${numOfMoreLabel} 項目`}

      {/* delete label */}
      {numOfMoreLabel === 0 && (
        <Tippy content={TOOLTIP_TEXT.CANCEL_LABEL}>
          <SLabelButton>
            <Icon.Clear onClick={removeLabelHandler} />
          </SLabelButton>
        </Tippy>
      )}
    </SLabel>
  );
};

export default Label;
