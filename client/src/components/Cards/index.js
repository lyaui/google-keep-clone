import { useState, useEffect, useRef } from 'react';
import { useUI } from 'contexts/UI-context';
import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

const Cards = ({ memos }) => {
  const { UIState } = useUI();
  const { layout, isFixedMenu } = UIState;
  const masonryRef = useRef();
  const [masonryDom, setMasonryDom] = useState(null);

  useEffect(() => {
    setMasonryDom(masonryRef.current);
  }, [setMasonryDom]);

  return (
    <div ref={masonryRef}>
      <SCards className='masonry' viewMode={layout} isFixedMenu={isFixedMenu}>
        {memos.map((card) => (
          <Card key={card._id} card={card} masonryDom={masonryDom} />
        ))}
      </SCards>
    </div>
  );
};

export default Cards;
