import { useUpdateMemo } from '@/hooks/updateMemo-hook.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import Button from '@/components/UI/Buttons';
import { SCardPin } from '@/components/ActionButtons/EditCardPinButton/style.jsx';

const EditCardPinButton = ({ id }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const togglePinHandler = (e) => {
    e.stopPropagation();
    dispatchUpdateMemo({ isPinned: !currentMemo.isPinned });
  };

  const tooltipText = currentMemo.isPinned
    ? TOOLTIP_TEXT.CANCEL_PIN
    : TOOLTIP_TEXT.PIN;

  return (
    <Tippy content={tooltipText}>
      <SCardPin style={{ '--opacity': currentMemo._id ? 0 : 1 }}>
        <Button size="medium" onClick={togglePinHandler}>
          {currentMemo.isPinned ? <Icon.Pin /> : <Icon.PinOutline />}
        </Button>
      </SCardPin>
    </Tippy>
  );
};

export default EditCardPinButton;
