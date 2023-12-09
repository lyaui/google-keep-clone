import { useMemo } from 'react';
import { useFetchMemos } from '@/hooks/fetchMemos-hook.js';
import { getUserMemos } from '@/store/memosSlice/memos-action.js';
import * as Icon from '@/components/UI/Icon';
import SkeletonCards from '@/skeletons/SkeletonCards';
import Cards from '@/components/Cards';
import Hint from '@/components/UI/Hint';

const Archive = () => {
  const params = useMemo(() => ({ isArchived: true }), []);
  const { pinnedMemo, unpinnedMemo, isLoading } = useFetchMemos({
    action: getUserMemos,
    params,
  });

  const showHint =
    pinnedMemo.length === 0 && unpinnedMemo.length === 0 && !isLoading;

  return (
    <div>
      {/* skeleton */}
      {isLoading && <SkeletonCards />}

      {/* isPinned === true */}
      {!isLoading && pinnedMemo.length > 0 && (
        <Cards memos={pinnedMemo} title={'已固定'} />
      )}
      {/* isPinned === false */}
      {!isLoading && unpinnedMemo.length > 0 && (
        <Cards
          memos={unpinnedMemo}
          title={pinnedMemo.length > 0 ? '其他記事' : ''}
        />
      )}

      {/* hint */}
      {showHint && (
        <Hint icon={<Icon.Archive />} text="你封存的記事會顯示在這裡" />
      )}
    </div>
  );
};

export default Archive;
