import * as Icon from '@/components/UI/Icon';
import MemosPage from '@/components/MemosPage';
import { useFetchMemosQuery } from '@/store/apis/memoApi';

const Archive = () => {
  const params = { isArchived: true };
  const { data, isLoading } = useFetchMemosQuery(params);

  const pinnedMemo = data?.memos
    ? data.memos.filter((_memo) => _memo.isPinned)
    : [];

  const unpinnedMemo = data?.memos
    ? data?.memos?.filter((_memo) => !_memo.isPinned)
    : [];

  const hintConfig = {
    text: '你封存的記事會顯示在這裡',
    icon: <Icon.Archive />,
  };

  return (
    <MemosPage
      isLoading={isLoading}
      pinnedMemo={pinnedMemo}
      unpinnedMemo={unpinnedMemo}
      hintConfig={hintConfig}
    />
  );
};

export default Archive;
