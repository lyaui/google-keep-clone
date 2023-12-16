import { useMemo } from 'react';

import { useFetchMemos } from '@/hooks/fetchMemos-hook';
import { getUserMemos } from '@/store/memosSlice/memos-action';
import * as Icon from '@/components/UI/Icon';
import MemosPage from '@/components/MemosPage';

const Home = () => {
  const params = useMemo(() => ({ isArchived: false }), []);
  const { pinnedMemo, unpinnedMemo, isLoading } = useFetchMemos({
    action: getUserMemos,
    params,
  });

  const hintConfig = { text: '你新增的記事會顯示在這裡', icon: <Icon.Bulb /> };

  return (
    <MemosPage
      isLoading={isLoading}
      pinnedMemo={pinnedMemo}
      unpinnedMemo={unpinnedMemo}
      hintConfig={hintConfig}
    />
  );
};

export default Home;
