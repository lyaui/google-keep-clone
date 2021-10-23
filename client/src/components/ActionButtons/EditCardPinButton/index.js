import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SCardPin } from 'components/ActionButtons/EditCardPinButton/style.js';

const EditCardPinButton = ({ id }) => {
  const { currentMemo, dispatchUpdateMemo } = useUpdateMemo(id);

  const togglePinHandler = (e) => {
    e.stopPropagation();
    dispatchUpdateMemo({ isPinned: !currentMemo.isPinned });
  };

  const tooltipText = currentMemo.isPinned ? TOOLTIP_TEXT.CANCEL_PIN : TOOLTIP_TEXT.PIN;

  return (
    <Tippy content={tooltipText}>
      <SCardPin color={PALETTE_COLORS[currentMemo.color]} opacity={currentMemo._id ? '0' : '1'}>
        <ButtonRound size={34} onClick={togglePinHandler}>
          {currentMemo.isPinned ? <Icon.Pin /> : <Icon.PinOutline />}
        </ButtonRound>
      </SCardPin>
    </Tippy>
  );
};

export default EditCardPinButton;
