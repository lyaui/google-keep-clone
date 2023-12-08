import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import * as Icon from '@/components/UI/Icon/index.jsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText.js';
import { ButtonRound } from '@/components/UI/Buttons/index.jsx';

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
      <ButtonRound size={34} onClick={toggleArchiveHandler}>
        {currentMemo.isArchived ? <Icon.Unarchive /> : <Icon.Archive />}
      </ButtonRound>
    </Tippy>
  );
};

export default EditCardArchiveButton;
