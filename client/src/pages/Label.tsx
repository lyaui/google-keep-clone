import { useParams } from 'react-router-dom';
import * as Icon from '@/components/UI/Icon';
import MemosPage from '@/components/MemosPage';

import { useFetchMemosByLabelNameQuery } from '@/store/apis/memoApi';

function Label() {
  const { labelName } = useParams();

  const params = { isArchived: false };
  const { data, isFetching } = useFetchMemosByLabelNameQuery({
    labelName,
    params,
  });

  const pinnedMemo = data?.memos
    ? data.memos.filter((_memo) => _memo.isPinned)
    : [];

  const unpinnedMemo = data?.memos
    ? data?.memos?.filter((_memo) => !_memo.isPinned)
    : [];

  const hintConfig = {
    text: '目前還沒有記事加上這個標籤',
    icon: <Icon.LabelOutline />,
  };

  return (
    <MemosPage
      isLoading={isFetching}
      pinnedMemo={pinnedMemo}
      unpinnedMemo={unpinnedMemo}
      hintConfig={hintConfig}
    />
  );
}

export default Label;
