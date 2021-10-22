import { useDispatch, useSelector } from 'react-redux';
import { addMemo } from 'store/memosSlice/memos-action.js';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';

import * as Icon from 'components/UI/Icon/index.js';
import { ButtonRound } from 'components/UI/Buttons/index.js';

const CopyMemoButton = ({ id }) => {
  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);

  const copyMemoHandler = (e) => {
    e.stopPropagation();
    const copyMemo = memos.find((memo) => memo._id === id);
    dispatch(addMemo(copyMemo));
  };

  return (
    <Tippy content={TOOLTIP_TEXT.COPY}>
      <ButtonRound size={34} onClick={copyMemoHandler}>
        <Icon.Copy />
      </ButtonRound>
    </Tippy>
  );
};

export default CopyMemoButton;
