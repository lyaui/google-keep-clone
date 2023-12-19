import { useState, useEffect, useRef } from 'react';

import { Memo } from '@/types';
import { useUI } from '@/contexts/UI-context';
import Card from '@/components/UI/Card';
import { SCards, SCardsTitle } from '@/components/MemoCards/style';

interface MemoCardsProps {
  memos: Memo[];
  title?: string;
}

function MemoCards({ memos = [], title = '' }: MemoCardsProps) {
  const { UIState } = useUI();
  const { layout, isFixedMenu } = UIState;

  const masonryRef = useRef<HTMLDivElement>(null);
  const [masonryDom, setMasonryDom] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setMasonryDom(masonryRef.current);
    return () => setMasonryDom(null);
  }, []);

  return (
    <div ref={masonryRef}>
      <SCardsTitle layout={layout}>{title}</SCardsTitle>
      <SCards className="masonry" layout={layout} isFixedMenu={isFixedMenu}>
        {memos.map((card) => (
          <Card key={card._id} card={card} masonryDom={masonryDom} />
        ))}
      </SCards>
    </div>
  );
}

export default MemoCards;
