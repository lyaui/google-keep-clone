import { useState, useEffect, useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';
import { useMemoContextVal } from 'contexts/memo-context.js';
import { useUI } from 'contexts/UI-context/index.js';
import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

const Cards = () => {
  const { memos } = useMemoContextVal();
  const { UIState } = useUI();
  const { layout, isFixedMenu } = UIState;
  const masonryRef = useRef();
  const [masonryDom, setMasonryDom] = useState(null);

  useEffect(() => {
    setMasonryDom(masonryRef.current);
  }, []);

  return (
    <Droppable droppableId='cards'>
      {(provided) => (
        <div ref={composeRefs(masonryRef, provided.innerRef)} {...provided.droppableProps}>
          <SCards className='masonry' viewMode={layout} isFixedMenu={isFixedMenu}>
            {memos.map((card, index) => (
              <Card
                key={card.id}
                id={card.id}
                color={card.color}
                title={card.title}
                images={card.images}
                content={card.content}
                labels={card.labels}
                links={card.links}
                masonryDom={masonryDom}
                droppableId='cards'
                index={index}
              />
            ))}
            {provided.placeholder}
          </SCards>
        </div>
      )}
    </Droppable>
  );
};

export default Cards;
