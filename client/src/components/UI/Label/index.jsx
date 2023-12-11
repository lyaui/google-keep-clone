import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon/index.jsx';
import { SLabel, SLabelButton } from '@/components/UI/Label/style.jsx';

const Label = ({ id, label, isShowMoreLabel = false, numOfMoreLabel = 0 }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);
  const updatedLabels = label
    ? currentMemo.labels.filter((item) => item._id !== label._id)
    : [];

  const removeLabelHandler = (e) => {
    e.stopPropagation();
    dispatchUpdateMemo({ labels: updatedLabels });
  };

  return (
    <SLabel
      style={{
        '--rounded': isShowMoreLabel
          ? 'var(--rounded-sm)'
          : 'var(--rounded-2xl)',
        '--padding': isShowMoreLabel ? '3px 12px 3px 12px' : '3px 16px 3px 8px',
      }}
    >
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
