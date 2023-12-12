import { useState, useEffect, useRef } from 'react';

import { useUI } from '@/contexts/UI-context';
import { VIEW_MODE } from '@/constants/UI';
import Card from '@/components/UI/Card';
import { SCards, SCardsTitle } from '@/components/MemoCards/style.js';

const MemoCards = ({ memos, title }) => {
  const { UIState } = useUI();
  const { layout, isFixedMenu } = UIState;
  const masonryRef = useRef();
  const [masonryDom, setMasonryDom] = useState(null);

  useEffect(() => {
    setMasonryDom(masonryRef.current);
  }, [setMasonryDom]);

  return (
    <div ref={masonryRef}>
      <SCardsTitle
        style={{ '--justify-content': layout === VIEW_MODE.LIST && 'center' }}
      >
        {title}
      </SCardsTitle>
      <SCards
        className="masonry"
        style={{
          '--gap': layout === VIEW_MODE.GRID ? '12px' : '20px',
          '--columns':
            layout === VIEW_MODE.GRID
              ? 'repeat(auto-fill, minmax(230px, 1fr))'
              : '600px',
          '--padding': isFixedMenu ? '20px 80px' : '20px 80px 20px 100px',
        }}
      >
        {memos.map((card) => (
          <Card key={card._id} card={card} masonryDom={masonryDom} />
        ))}
      </SCards>
    </div>
  );
};

export default MemoCards;
