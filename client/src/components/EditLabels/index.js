import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import * as Icon from 'components/UI/Icon/index.js';
import { useAuth } from 'contexts/auth-context';
import { addLabel } from 'store/labelsSlice/labels-action.js';
import {
  SEditCardLabels,
  SEditCardLabelTitle,
  SSearchLabel,
  SLabels,
  SLabel,
  SLabelIcon,
  SLabelEditInput,
  SAddNewLabel,
} from 'components/EditLabels/style.js';

const EditLabels = ({ type = 'memo' }) => {
  const dispatch = useDispatch();
  const { labels: allLabels } = useSelector((state) => state.labels);
  const [keyword, setKeyword] = useState('');
  const { authState } = useAuth();
  const { userId } = authState;

  const labels = keyword
    ? allLabels.filter((label) => label.name.toLowerCase().includes(keyword.toLowerCase()))
    : allLabels;

  const searchKeywordHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  const addLabelHandler = () => {
    dispatch(addLabel({ name: keyword, creator: userId }));
    setKeyword('');
  };

  const deleteLabelHandler = () => {
    alert('yo');
  };

  const test = () => {
    console.log('yo');
  };

  const isSideMenu = type === 'sideMenu';
  const noMatchResults = keyword && labels.length === 0;

  return (
    <SEditCardLabels width={isSideMenu ? 300 : 200}>
      <SEditCardLabelTitle>{isSideMenu ? '編輯標籤' : '為記事加標籤'}</SEditCardLabelTitle>
      <SSearchLabel>
        <input
          type='text'
          value={keyword}
          placeholder='輸入標籤名稱'
          maxLength='50'
          onChange={searchKeywordHandler}
        />
        <Icon.Search />
      </SSearchLabel>

      <SLabels maxHeight={isSideMenu ? 300 : 200}>
        {/* edit memo labels */}
        {!isSideMenu &&
          labels.map((label) => (
            <SLabel key={label.id} isSideMenu={isSideMenu}>
              <SLabelIcon>
                {label.isSelected ? <Icon.CheckboxOutline /> : <Icon.EmptyCheckbox />}
              </SLabelIcon>
              <span>{label.name}</span>
            </SLabel>
          ))}

        {/* edit labels */}
        {isSideMenu &&
          labels.map((label) => (
            // tag
            <SLabel key={label.id} isSideMenu={isSideMenu}>
              <SLabelIcon>
                <Icon.Label name={'label'} />
              </SLabelIcon>
              {/* delete */}
              <Tippy content={TOOLTIP_TEXT.DELETE_LABEL}>
                <SLabelIcon onClick={deleteLabelHandler}>
                  <Icon.Delete name={'delete'} />
                </SLabelIcon>
              </Tippy>
              {/* <span editable='true'>{label.name}</span> */}
              <SLabelEditInput
                onBlur={test}
                type='text'
                value={label.name}
                placeholder='輸入標籤名稱'
              />
              {/* edit */}
              <Tippy content={TOOLTIP_TEXT.RENAME_LABEL}>
                <SLabelIcon>
                  <Icon.Edit />
                </SLabelIcon>
              </Tippy>
            </SLabel>
          ))}
      </SLabels>
      {noMatchResults && (
        <SAddNewLabel onClick={addLabelHandler}>
          ＋ 建立標籤 「<b>{keyword}</b>」
        </SAddNewLabel>
      )}
    </SEditCardLabels>
  );
};

export default EditLabels;
