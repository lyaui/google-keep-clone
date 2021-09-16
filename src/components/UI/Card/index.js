import { useState, useEffect, useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import composeRefs from '@seznam/compose-react-refs';
import { SCard } from 'components/UI/Card/style.js';
import CardHeader from 'components/UI/Card/CardHeader';
import CardContent from 'components/UI/Card/CardContent';
import CardLabels from 'components/UI/Card/CardLabels';
import CardFooter from 'components/UI/Card/CardFooter';

const Card = ({ id, index, color, title, content, labels, masonryDom }) => {
  const cardRef = useRef();
  const [gridRowSpan, setGridRowSpan] = useState(0);

  // 計算每張卡片跨列 span
  const getRowSpan = () => {
    const cardRefDOM = cardRef.current;
    const grid = masonryDom;
    if (!grid || !cardRefDOM) return;

    const rowGap = parseInt(
      window
        .getComputedStyle(grid.querySelector('.masonry'))
        .getPropertyValue('grid-row-gap')
        .replace('px', ''),
    );
    const rowHeight = parseInt(
      window
        .getComputedStyle(grid.querySelector('.masonry'))
        .getPropertyValue('grid-auto-rows')
        .replace('px', ''),
    );
    const rowSpan = Math.ceil(
      (cardRefDOM.querySelector('.growing-content').getBoundingClientRect().height + rowGap) /
        (rowHeight + rowGap),
    );

    setGridRowSpan(rowSpan);
  };

  useEffect(() => {
    window.addEventListener('resize', getRowSpan);
    getRowSpan();
    return () => {
      window.removeEventListener('resize', getRowSpan);
    };
  });
  console.log(labels.length);
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <SCard
          color={color}
          className='card'
          ref={composeRefs(cardRef, provided.innerRef)}
          gridRowSpan={gridRowSpan}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='growing-content'>
            {/* images */}
            {/* <CardImages /> */}
            {/* header */}
            <CardHeader>{title}</CardHeader>
            {/* content */}
            <CardContent>{content}</CardContent>
            {/* labels */}
            {labels.length > 0 && <CardLabels labels={labels} />}
            {/* footer */}
            <CardFooter />
            {/* links */}
            {/* <CardLinks /> */}
          </div>
        </SCard>
      )}
    </Draggable>
  );
};

export default Card;
