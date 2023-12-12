import type { MouseEvent } from 'react';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import * as Icon from '@/components/UI/Icon';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import Button from '@/components/UI/Buttons';

function EditMemoArchiveButton({ id }: { id?: string }) {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const toggleArchiveHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatchUpdateMemo({ isArchived: !currentMemo.isArchived });
  };

  const tooltipText = currentMemo.isArchived
    ? TOOLTIP_TEXT.CANCEL_ARCHIVE
    : TOOLTIP_TEXT.ARCHIVE;

  return (
    <Tippy content={tooltipText}>
      <Button size="medium" onClick={toggleArchiveHandler}>
        {currentMemo.isArchived ? <Icon.Unarchive /> : <Icon.Archive />}
      </Button>
    </Tippy>
  );
}

export default EditMemoArchiveButton;
