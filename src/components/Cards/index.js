import { useState, useEffect, useRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';
import { useMemoContextVal } from 'contexts/memo-context.js';
import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

// default #e0e0e0
// red #f28b82
// orange #fbbc04
// yellow #fff475
// green #ccff90
// teal #a7ffeb
// blue #cbf0f8
// dark-blue #aecbfa
// purple #d7aefb
// pink #fdcfe8
// brown #e6c9a8
// gray #e8eaed

const Cards = () => {
  const { memos } = useMemoContextVal();
  const masonryRef = useRef();
  const [masonryDom, setMasonryDom] = useState(null);

  useEffect(() => {
    setMasonryDom(masonryRef.current);
  }, []);

  return (
    <Droppable droppableId='cards'>
      {(provided) => (
        <div ref={composeRefs(masonryRef, provided.innerRef)} {...provided.droppableProps}>
          <SCards className='masonry'>
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
