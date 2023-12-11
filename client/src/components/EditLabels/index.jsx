import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import * as Icon from '@/components/UI/Icon';
import { addLabel } from '@/store/labelsSlice/labels-action.js';
import MemoLabel from '@/components/EditLabels/MemoLabel';
import SideMenuLabel from '@/components/EditLabels/SideMenuLabel';
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
  const dispatch = useDispatch();
  const { labels: allLabels } = useSelector((state) => state.labels);
  const [keyword, setKeyword] = useState('');
  const [enteredLabel, setEnteredLabel] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const labels = keyword
    ? allLabels.filter((label) =>
        label.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : allLabels;

  const stopPropagationHandler = (e) => {
    e.stopPropagation();
  };

  const clearEnteredLabelHandler = (e) => {
    e.preventDefault();
    setEnteredLabel('');
  };

  const enteredLabelHandler = (e) => {
    setErrorMessage('');
    setEnteredLabel(e.target.value);
  };

  const searchKeywordHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  const addLabelHandler = (value) => (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const isLabelExisted = !!allLabels.find(
      (label) => label.name === value.trim()
    );
    if (isLabelExisted) return setErrorMessage('已經有同名的標籤');
    dispatch(addLabel({ name: value.trim() }));
    setKeyword('');
    setEnteredLabel('');
  };

  const isSideMenu = type === 'sideMenu';
  const noMatchResults = keyword && labels.length === 0;

  return (
    <SEditCardLabels
      style={{ '--width': isSideMenu ? '300px' : '200px' }}
      onClick={stopPropagationHandler}
    >
      <SEditCardLabelTitle>
        {isSideMenu ? '編輯標籤' : '為記事加標籤'}
      </SEditCardLabelTitle>
      {isSideMenu && (
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
      )}
      {errorMessage && (
        <SLabelErrMsg style={{ marginTop: '-10px', marginLeft: '30px' }}>
          {errorMessage}
        </SLabelErrMsg>
      )}
      {!isSideMenu && (
        <SLabelInput>
          <input
            type="text"
            value={keyword}
            placeholder="輸入標籤名稱"
            maxLength="50"
            onChange={searchKeywordHandler}
          />
          <Icon.Search />
        </SLabelInput>
      )}

      <SLabels style={{ '--height': isSideMenu ? '300px' : '200px' }}>
        {/* edit memo labels */}
        {!isSideMenu &&
          labels.map((label) => (
            <MemoLabel
              id={id}
              key={label._id}
              label={label}
              isSideMenu={isSideMenu}
            />
          ))}

        {/* edit labels */}
        {isSideMenu &&
          labels.map((label) => (
            <SideMenuLabel
              key={label._id}
              label={label}
              isSideMenu={isSideMenu}
            />
          ))}
      </SLabels>
      {noMatchResults && (
        <SAddNewLabel onClick={addLabelHandler(keyword)}>
          ＋ 建立標籤 「<b>{keyword}</b>」
        </SAddNewLabel>
      )}
    </SEditCardLabels>
  );
};

export default EditLabels;
