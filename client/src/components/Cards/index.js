import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';

import { getUserMemos } from 'store/memosSlice/memos-action.js';
import { useAuth } from 'contexts/auth-context';
import { useUI } from 'contexts/UI-context';
import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

const Cards = () => {
  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);

  console.log({ memos });

  const { authState } = useAuth();
  const { UIState } = useUI();
  const { userId } = authState;
  const { layout, isFixedMenu } = UIState;
  const masonryRef = useRef();
  const [masonryDom, setMasonryDom] = useState(null);

  useEffect(() => {
    dispatch(getUserMemos(userId));
    setMasonryDom(masonryRef.current);
  }, [dispatch, setMasonryDom, userId]);

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
