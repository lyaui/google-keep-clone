import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { deleteMemo } from 'store/memosSlice/memos-action.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const DeleteCardButton = ({ id }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.memos);

  const deleteMemoHandler = (e) => {
    e.stopPropagation();
    if (!id) return;
    dispatch(deleteMemo(id));
  };

  return (
    <Tippy content={TOOLTIP_TEXT.DELETE_MEMO}>
      <ButtonRound onClick={deleteMemoHandler} size={34} disabled={isLoading}>
        <Icon.DeleteOutline />
      </ButtonRound>
    </Tippy>
  );
};

export default DeleteCardButton;
