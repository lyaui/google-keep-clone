import type { MouseEvent } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { useDeleteMemoMutation } from '@/store/apis/memoApi';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

function DeleteMemoButton({ id }: { id: string }) {
  const [deleteMemo, result] = useDeleteMemoMutation();

  const deleteMemoHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!id) return;
    deleteMemo(id);
  };

  return (
    <Tippy content={TOOLTIP_TEXT.DELETE_MEMO}>
      <Button
        onClick={deleteMemoHandler}
        size="medium"
        disabled={result.isLoading}
      >
        <Icon.DeleteOutline />
      </Button>
    </Tippy>
  );
}

export default DeleteMemoButton;
