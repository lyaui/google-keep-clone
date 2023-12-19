import * as Icon from '@/components/UI/Icon';
import MemosPage from '@/components/MemosPage';

import { useFetchUserMemosQuery } from '@/store/apis/memoApi';

const Home = () => {
  const params = { isArchived: false };
  const { data, isLoading } = useFetchUserMemosQuery(params);
  const { pinnedMemo = [], unpinnedMemo = [] } = data || {};

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
