import { useMemo } from 'react';
import { useFetchMemos } from '@/hooks/fetchMemos-hook.js';
import { getUserMemos } from '@/store/memosSlice/memos-action.js';
import * as Icon from '@/components/UI/Icon';
import SkeletonEditor from '@/skeletons/SkeletonEditor';
import SkeletonCards from '@/skeletons/SkeletonCards';
import MemoCards from '@/components/MemoCards';
import CardEditor from '@/components/CardEditor';
import Hint from '@/components/UI/Hint';

const Home = () => {
  const params = useMemo(() => ({ isArchived: false }), []);
  const { pinnedMemo, unpinnedMemo, isLoading } = useFetchMemos({
    action: getUserMemos,
    params,
  });

  const showHint =
    pinnedMemo.length === 0 && unpinnedMemo.length === 0 && !isLoading;

  return (
    <div>
      {/* skeleton */}
      {isLoading && <SkeletonEditor />}
      {isLoading && <SkeletonCards />}

      {/* editor */}
      {!isLoading && <CardEditor />}

      {/* isPinned === true */}
      {!isLoading && pinnedMemo.length > 0 && (
        <MemoCards memos={pinnedMemo} title={'已固定'} />
      )}
      {/* isPinned === false */}
      {!isLoading && unpinnedMemo.length > 0 && (
        <MemoCards
          memos={unpinnedMemo}
          title={pinnedMemo.length > 0 ? '其他記事' : ''}
        />
      )}

      {/* hint */}
      {showHint && (
        <Hint icon={<Icon.Bulb />} text="你新增的記事會顯示在這裡" />
      )}
    </div>
  );
};

export default Home;
