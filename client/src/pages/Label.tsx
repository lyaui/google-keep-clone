import { useMemo } from 'react';
import { useFetchMemos } from '@/hooks/useFetchMemos';
import { useParams } from 'react-router-dom';

import { getUserMemosByLabelName } from '@/store/memosSlice/memos-action';
import * as Icon from '@/components/UI/Icon';
import MemosPage from '@/components/MemosPage';

function Label() {
  const { labelName } = useParams();

  const params = useMemo(
    () => ({ labelName, query: { isArchived: false } }),
    [labelName]
  );

  const { pinnedMemo, unpinnedMemo, isLoading } = useFetchMemos({
    action: getUserMemosByLabelName,
    params,
  });

  const hintConfig = {
    text: '目前還沒有記事加上這個標籤',
    icon: <Icon.LabelOutline />,
  };

  return (
    <MemosPage
      isLoading={isLoading}
      pinnedMemo={pinnedMemo}
      unpinnedMemo={unpinnedMemo}
      hintConfig={hintConfig}
    />
  );
}

export default Label;
