import type { ReactNode } from 'react';

import type { Memo } from '@/types';
import SkeletonEditor from '@/skeletons/SkeletonEditor';
import SkeletonCards from '@/skeletons/SkeletonCards';
import MemoCards from '@/components/MemoCards';
import CardEditor from '@/components/CardEditor';
import Hint from '@/components/UI/Hint';

interface MemosPageProps {
  isLoading: boolean;
  pinnedMemo: Memo[];
  unpinnedMemo: Memo[];
  hintConfig: {
    text: string;
    icon: ReactNode;
  };
}

function MemosPage({
  isLoading,
  pinnedMemo = [],
  unpinnedMemo = [],
  hintConfig,
}: MemosPageProps) {
  const showHint = pinnedMemo.length === 0 && unpinnedMemo.length === 0;
  const sections = [
    { title: '已固定', memos: pinnedMemo },
    {
      title: pinnedMemo.length > 0 ? '其他記事' : '',
      memos: unpinnedMemo,
    },
  ].filter((_section) => _section.memos.length > 0);

  return (
    <div>
      {isLoading ? (
        <>
          <SkeletonEditor />
          <SkeletonCards />
        </>
      ) : (
        <>
          <CardEditor />
          {sections.map((_section) => (
            <MemoCards key={_section.title} {..._section} />
          ))}
        </>
      )}
      {showHint && <Hint {...hintConfig} />}
    </div>
  );
}

export default MemosPage;
