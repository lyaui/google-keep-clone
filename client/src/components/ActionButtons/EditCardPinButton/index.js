import { useDispatch } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';
import { SCardPin } from 'components/ActionButtons/EditCardPinButton/style.js';

const EditCardPinButton = ({ isPinned, color, opacity }) => {
  const dispatch = useDispatch();
  const tooltipText = isPinned ? TOOLTIP_TEXT.CANCEL_PIN : TOOLTIP_TEXT.PIN;

  const togglePinHandler = () => dispatch(memosActions.updateMemo({ isPinned: !isPinned }));

  return (
    <Tippy content={tooltipText}>
      <SCardPin color={color} opacity={opacity}>
        <ButtonRound size={34} onClick={togglePinHandler}>
          {isPinned ? <Icon.Pin /> : <Icon.PinOutline />}
        </ButtonRound>
      </SCardPin>
    </Tippy>
  );
};

export default EditCardPinButton;
