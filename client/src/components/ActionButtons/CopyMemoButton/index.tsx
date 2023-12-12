import { type MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { addMemo } from '@/store/memosSlice/memos-action';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

function CopyMemoButton({ id }: { id: string }) {
  const dispatch = useAppDispatch();
  const { memos } = useAppSelector((state) => state.memos);

  const copyMemoHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const copyMemo = memos.find((memo) => memo._id === id);
    dispatch(addMemo(copyMemo));
  };

  return (
    <Tippy content={TOOLTIP_TEXT.COPY}>
      <Button size="medium" onClick={copyMemoHandler}>
        <Icon.Copy />
      </Button>
    </Tippy>
  );
}

export default CopyMemoButton;
