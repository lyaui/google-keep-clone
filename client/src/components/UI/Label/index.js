import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { updateMemo } from 'store/memosSlice/memos-action.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { SLabel, SLabelButton } from 'components/UI/Label/style.js';

const Label = ({ id, label, isShowMoreLabel = false, numOfMoreLabel = 0 }) => {
  const dispatch = useDispatch();
  const { memos, memo, isLoading } = useSelector((state) => state.memos);
  const currentMemo = memos.find((memo) => memo._id === id) || memo;

  const removeLabelHandler = (e) => {
    e.stopPropagation();
    const updatedLabels = currentMemo.labels.filter((item) => item._id !== label._id);
    if (isLoading) return;
    id
      ? dispatch(updateMemo({ memoId: id, payload: { labels: updatedLabels } }))
      : dispatch(memosActions.updateMemo({ labels: updatedLabels }));
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
