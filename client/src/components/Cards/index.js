import { useState, useEffect, useRef } from 'react';
import { useUI } from 'contexts/UI-context';
import { VIEW_MODE } from 'constants/UI.js';
import Card from 'components/UI/Card';
import { SCards, SCardsTitle } from 'components/Cards/style.js';

const Cards = ({ memos, title }) => {
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
        style={{
          '--padding': isFixedMenu ? '0px 80px' : '0px 80px 0px 100px',
        }}
      >
        {title}
      </SCardsTitle>
      <SCards
        className='masonry'
        style={{
          '--gap': layout === VIEW_MODE.GRID ? '12px' : '20px',
          '--columns':
            layout === VIEW_MODE.GRID ? 'repeat(auto-fill, minmax(230px, 1fr))' : '600px',
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

export default Cards;
