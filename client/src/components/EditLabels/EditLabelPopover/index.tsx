import { useState } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import { addLabel } from '@/store/labelsSlice/labels-action';
import EditableLabelInput from '@/components/EditLabels/EditLabelPopover/EditableLabelInput';
import {
  SEditCardLabels,
  SEditCardLabelTitle,
  SLabelInput,
  SLabels,
  SLabelErrMsg,
} from '@/components/EditLabels/style.jsx';
import { SLabelIcon, SLabelEditInput } from '@/components/EditLabels/style';

const EditLabelPopover = () => {
  const dispatch = useAppDispatch();
  const { labels: allLabels } = useAppSelector((state) => state.labels);
  const [keyword, setKeyword] = useState('');
  const [enteredLabel, setEnteredLabel] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const labels = keyword
    ? allLabels.filter((label) =>
        label.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : allLabels;

  const stopPropagationHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const clearEnteredLabelHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setEnteredLabel('');
  };

  const enteredLabelHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    setEnteredLabel(event.target.value);
  };

  const addLabelHandler =
    (enteredVal: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!enteredVal.trim()) return;

      const isLabelExisted = !!allLabels.find(
        (label) => label.name === enteredVal.trim()
      );
      if (isLabelExisted) return setErrorMessage('已經有同名的標籤');
      dispatch(addLabel({ name: enteredVal.trim() }));
      setKeyword('');
      setEnteredLabel('');
    };

  return (
    <SEditCardLabels isSideMenu={true} onClick={stopPropagationHandler}>
      <SEditCardLabelTitle>編輯標籤</SEditCardLabelTitle>
      <SLabelInput>
        <Tippy content={TOOLTIP_TEXT.CANCEL}>
          <SLabelIcon onClick={clearEnteredLabelHandler}>
            <Icon.Clear />
          </SLabelIcon>
        </Tippy>
        <SLabelEditInput
          style={{ margin: '0 10px' }}
          placeholder="建立新標籤"
          value={enteredLabel}
          onChange={enteredLabelHandler}
        />
        {enteredLabel.trim().length > 0 && (
          <Tippy content={TOOLTIP_TEXT.LABEL}>
            <SLabelIcon onClick={addLabelHandler(enteredLabel)}>
              <Icon.Save />
            </SLabelIcon>
          </Tippy>
        )}
      </SLabelInput>
      {errorMessage && (
        <SLabelErrMsg style={{ marginTop: '-10px', marginLeft: '30px' }}>
          {errorMessage}
        </SLabelErrMsg>
      )}
      <SLabels isSideMenu={true}>
        {/* edit labels */}
        {labels.map((label) => (
          <EditableLabelInput key={label._id} label={label} />
        ))}
      </SLabels>
    </SEditCardLabels>
  );
};

export default EditLabelPopover;
