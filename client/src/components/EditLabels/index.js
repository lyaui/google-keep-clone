import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Icon from 'components/UI/Icon/index.js';
import { useAuth } from 'contexts/auth-context';
import { addLabel } from 'store/labelsSlice/labels-action.js';
import MemoLabel from 'components/EditLabels/MemoLabel';
import SideMenuLabel from 'components/EditLabels/SideMenuLabel';
import {
  SEditCardLabels,
  SEditCardLabelTitle,
  SSearchLabel,
  SLabels,
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
        {!isSideMenu && labels.map((label) => <MemoLabel label={label} isSideMenu={isSideMenu} />)}

        {/* edit labels */}
        {isSideMenu &&
          labels.map((label) => <SideMenuLabel label={label} isSideMenu={isSideMenu} />)}
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
