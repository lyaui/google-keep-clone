import { type MouseEvent } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import { SCardPin } from '@/components/ActionButtons/EditCardPinButton/style';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';

const EditCardPinButton = ({ id }: { id: string }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const togglePinHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatchUpdateMemo({ isPinned: !currentMemo.isPinned });
  };

  const tooltipText = currentMemo.isPinned
    ? TOOLTIP_TEXT.CANCEL_PIN
    : TOOLTIP_TEXT.PIN;

  return (
    <Tippy content={tooltipText}>
      <SCardPin isNewMemo={!!currentMemo._id}>
        <Button size="medium" onClick={togglePinHandler}>
          {currentMemo.isPinned ? <Icon.Pin /> : <Icon.PinOutline />}
        </Button>
      </SCardPin>
    </Tippy>
  );
};

export default EditCardPinButton;
