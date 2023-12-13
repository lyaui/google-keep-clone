import { useState } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import 'tippy.js/dist/tippy.css';
import * as Icon from '@/components/UI/Icon';
import { addLabel } from '@/store/labelsSlice/labels-action';
import LabelCheckbox from '@/components/EditLabels/AddLabelPopover/LabelCheckbox';
import {
  SEditCardLabels,
  SEditCardLabelTitle,
  SLabelInput,
  SLabels,
  SAddNewLabel,
} from '@/components/EditLabels/style';

function AddLabelPopover({ id }: { id?: string }) {
  const dispatch = useAppDispatch();
  const { labels: allLabels } = useAppSelector((state) => state.labels);
  const [keyword, setKeyword] = useState('');

  const labels = keyword
    ? allLabels.filter((label) =>
        label.name.toLowerCase().includes(keyword.toLowerCase())
      )
    : allLabels;

  const stopPropagationHandler = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const searchKeywordHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value.trim());
  };

  const addLabelHandler =
    (enteredVal: string) => (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      if (!enteredVal.trim()) return;

      dispatch(addLabel({ name: enteredVal.trim() }));
      setKeyword('');
    };

  const noMatchResults = keyword && labels.length === 0;

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
          <LabelCheckbox id={id} key={label._id} label={label} />
        ))}
      </SLabels>
      {noMatchResults && (
        <SAddNewLabel onClick={addLabelHandler(keyword)}>
          ＋ 建立標籤 「<b>{keyword}</b>」
        </SAddNewLabel>
      )}
    </SEditCardLabels>
  );
}

export default AddLabelPopover;
