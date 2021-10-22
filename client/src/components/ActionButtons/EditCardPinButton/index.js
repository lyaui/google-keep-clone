import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { updateMemo } from 'store/memosSlice/memos-action.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SCardPin } from 'components/ActionButtons/EditCardPinButton/style.js';

const EditCardPinButton = ({ id }) => {
  const dispatch = useDispatch();
  const { memos, memo, isEditingNewMemo } = useSelector((state) => state.memos);
  const currentMemo = memos.find((memo) => memo._id === id) || memo;

  const togglePinHandler = (e) => {
    e.stopPropagation();
    isEditingNewMemo
      ? dispatch(memosActions.updateMemo({ isPinned: !currentMemo.isPinned }))
      : dispatch(updateMemo({ memoId: id, payload: { isPinned: !currentMemo.isPinned } }));
  };

  const tooltipText = currentMemo.isPinned ? TOOLTIP_TEXT.CANCEL_PIN : TOOLTIP_TEXT.PIN;

  return (
    <Tippy content={tooltipText}>
      <SCardPin color={PALETTE_COLORS[currentMemo.color]} opacity={currentMemo._id ? '0' : '1'}>
        <ButtonRound size={34} onClick={togglePinHandler}>
          {currentMemo.isPinned ? <Icon.Pin /> : <Icon.PinOutline />}
        </ButtonRound>
      </SCardPin>
    </Tippy>
  );
};

export default EditCardPinButton;
