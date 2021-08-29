import { useState, useEffect, useRef } from 'react';
import { SCard } from 'components/UI/Card/style.js';
import CardHeader from 'components/UI/Card/CardHeader';
import CardContent from 'components/UI/Card/CardContent';
import CardFooter from 'components/UI/Card/CardFooter';

const Crad = ({ color, title, content, masonryDom }) => {
  const cardRef = useRef();
  const [gridRowSpan, setGridRowSpan] = useState(0);

  const getRowSpan = () => {
    const cardRefDOM = cardRef.current;
    const grid = masonryDom;
    if (!grid || !cardRefDOM) return;

    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-row-gap').replace('px', ''),
    );
    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-auto-rows').replace('px', ''),
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

  return (
    <SCard color={color} className='card' ref={cardRef} gridRowSpan={gridRowSpan}>
      <div className='growing-content'>
        <CardHeader>{title}</CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter />
      </div>
    </SCard>
  );
};

export default Crad;
