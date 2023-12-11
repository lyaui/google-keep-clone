import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { deleteMemo } from '@/store/memosSlice/memos-action.js';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

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
      <Button onClick={deleteMemoHandler} size="medium" disabled={isLoading}>
        <Icon.DeleteOutline />
      </Button>
    </Tippy>
  );
};

export default DeleteCardButton;
