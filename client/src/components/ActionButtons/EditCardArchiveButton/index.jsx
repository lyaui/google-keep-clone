import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import * as Icon from '@/components/UI/Icon/index.jsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText.js';
import Button from '@/components/UI/Buttons';

const EditCardArchiveButton = ({ id }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const toggleArchiveHandler = (e) => {
    e.stopPropagation();
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
};

export default EditCardArchiveButton;
