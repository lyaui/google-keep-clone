import type { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { deleteMemo } from '@/store/memosSlice/memos-action';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

function DeleteMemoButton({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.memos);

  const deleteMemoHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
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
}

export default DeleteMemoButton;
