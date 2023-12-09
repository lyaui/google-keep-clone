import { useMemo } from 'react';
import { useFetchMemos } from '@/hooks/fetchMemos-hook.js';
import { useParams } from 'react-router-dom';

import { getUserMemosByLabelName } from '@/store/memosSlice/memos-action';
import * as Icon from '@/components/UI/Icon';
import SkeletonEditor from '@/skeletons/SkeletonEditor';
import SkeletonCards from '@/skeletons/SkeletonCards';
import Cards from '@/components/Cards';
import CardEditor from '@/components/CardEditor';
import Hint from '@/components/UI/Hint';

function Label() {
  const { labelName } = useParams();

  const params = useMemo(
    () => ({ labelName, query: { isArchived: false } }),
    [labelName],
  );

  const { pinnedMemo, unpinnedMemo, isLoading } = useFetchMemos({
    action: getUserMemosByLabelName,
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
        <Hint icon={<Icon.LabelOutline />} text='目前還沒有記事加上這個標籤' />
      )}
    </div>
  );
}

export default Label;
