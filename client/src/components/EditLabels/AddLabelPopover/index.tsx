import { useState, useMemo } from 'react';
import type { MouseEvent, ChangeEvent } from 'react';
import 'tippy.js/dist/tippy.css';

import * as Icon from '@/components/UI/Icon';
import {
  useFetchLabelsQuery,
  useCreateLabelMutation,
} from '@/store/apis/labelApi';
import LabelCheckbox from '@/components/EditLabels/AddLabelPopover/LabelCheckbox';
import {
  SEditCardLabels,
  SEditCardLabelTitle,
  SLabelInput,
  SLabels,
  SAddNewLabel,
} from '@/components/EditLabels/style';

function AddLabelPopover({ id }: { id?: string }) {
  const { data } = useFetchLabelsQuery();
  const labels = data?.labels || [];

  const [addNewLabel, addedResult] = useCreateLabelMutation();

  const [keyword, setKeyword] = useState('');

  const filtered = useMemo(() => {
    return keyword
      ? labels.filter((_label) =>
          _label.name.toLowerCase().includes(keyword.toLowerCase())
        )
      : labels;
  }, [keyword, labels]);

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

      addNewLabel({ name: enteredVal.trim() });
      setKeyword('');
    };

  const noMatchResults = keyword && filtered.length === 0;

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
        {filtered.map((label) => (
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
