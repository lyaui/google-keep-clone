import { useState } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import { addLabel } from '@/store/labelsSlice/labels-action';
import MemoLabel from '@/components/EditLabels/AddLabelPopover';
import SideMenuLabel from '@/components/EditLabels/EditLabelPopover';
import {
  SEditCardLabels,
  SEditCardLabelTitle,
  SLabelInput,
  SLabels,
  SAddNewLabel,
  SLabelErrMsg,
} from '@/components/EditLabels/style.jsx';
import { SLabelIcon, SLabelEditInput } from '@/components/EditLabels/style.jsx';

const EditLabels = ({ type = 'memo', id }) => {
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

  const searchKeywordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.trim());
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

  const isSideMenu = type === 'sideMenu';
  const noMatchResults = keyword && labels.length === 0;

  const createLabel = (
    <SAddNewLabel onClick={addLabelHandler(keyword)}>
      ＋ 建立標籤 「<b>{keyword}</b>」
    </SAddNewLabel>
  );

  if (isSideMenu) {
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
            <SideMenuLabel key={label._id} label={label} isSideMenu={true} />
          ))}
        </SLabels>
        {createLabel}
      </SEditCardLabels>
    );
  }

  return (
    <SEditCardLabels onClick={stopPropagationHandler}>
      <SEditCardLabelTitle>為記事加標籤</SEditCardLabelTitle>
      {/* search label */}
      <SLabelInput>
        <input
          type="text"
          value={keyword}
          placeholder="輸入標籤名稱"
          maxLength={50}
          onChange={searchKeywordHandler}
        />
        <Icon.Search />
      </SLabelInput>
      <SLabels>
        {labels.map((label) => (
          <MemoLabel id={id} key={label._id} label={label} />
        ))}
      </SLabels>
      {createLabel}
    </SEditCardLabels>
  );
};

export default EditLabels;
