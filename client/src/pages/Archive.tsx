import { useMemo } from 'react';
import { useFetchMemos } from '@/hooks/fetchMemos-hook.js';
import { getUserMemos } from '@/store/memosSlice/memos-action';
import * as Icon from '@/components/UI/Icon';
import MemosPage from '@/components/MemosPage';

const Archive = () => {
  const params = useMemo(() => ({ isArchived: true }), []);
  const { pinnedMemo, unpinnedMemo, isLoading } = useFetchMemos({
    action: getUserMemos,
    params,
  });

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
