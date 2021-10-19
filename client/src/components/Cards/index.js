import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import { useAuth } from 'contexts/auth-context';
import { useUI } from 'contexts/UI-context';
import Card from 'components/UI/Card';
import { SCards } from 'components/Cards/style.js';

const Cards = () => {
  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);
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
    <div ref={masonryRef}>
      <SCards className='masonry' viewMode={layout} isFixedMenu={isFixedMenu}>
        {memos.map((card, index) => (
          <Card key={card._id} card={card} masonryDom={masonryDom} />
        ))}
      </SCards>
    </div>
  );
};

export default Cards;
