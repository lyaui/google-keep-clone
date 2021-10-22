import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { updateMemo } from 'store/memosSlice/memos-action.js';
import * as Icon from 'components/UI/Icon/index.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const EditCardArchiveButton = ({ id }) => {
  const dispatch = useDispatch();
  const { memo, memos, isEditingNewMemo } = useSelector((state) => state.memos);
  const currentMemo = memos.find((memo) => memo._id === id) || memo;

  const toggleArchiveHandler = (e) => {
    e.stopPropagation();
    isEditingNewMemo
      ? dispatch(memosActions.updateMemo({ isArchived: !currentMemo.isReactive }))
      : dispatch(updateMemo({ memoId: id, payload: { isArchived: !currentMemo.isArchived } }));
  };

  const tooltipText = currentMemo.isArchived ? TOOLTIP_TEXT.CANCEL_ARCHIVE : TOOLTIP_TEXT.ARCHIVE;

  return (
    <Tippy content={tooltipText}>
      <ButtonRound size={34} onClick={toggleArchiveHandler}>
        {currentMemo.isArchived ? <Icon.Unarchive /> : <Icon.Archive />}
      </ButtonRound>
    </Tippy>
  );
};

export default EditCardArchiveButton;
