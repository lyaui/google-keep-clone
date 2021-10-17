import { Fragment, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTE } from 'constants/routes.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import CardImages from 'components/UI/Card/CardImages';
import CardHeader from 'components/UI/Card/CardHeader';
import CardContent from 'components/UI/Card/CardContent';
import CardLabels from 'components/UI/Card/CardLabels';
import CardFooter from 'components/UI/Card/CardFooter';
import CardLinks from 'components/UI/Card/CardLinks';
import { SCard } from 'components/UI/Card/style.js';

const Card = ({ id, color, images, title, content, labels, links, masonryDom }) => {
  const history = useHistory();
  const cardRef = useRef();
  const [gridRowSpan, setGridRowSpan] = useState(0);
  const memoColor = PALETTE_COLORS[color];

  const openEditModalHandler = () => history.push(ROUTE.BUILD_MEMO_PATH(id));

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
  const isOnlyImages =
    !title && !content && labels.length === 0 && links.length === 0 && images.length > 0;
  const isOnlyLinks =
    !title && !content && labels.length === 0 && images.length === 0 && links.length > 0;
  const isOnlyImagesAndLinks =
    !title && !content && labels.length === 0 && images.length > 0 && links.length > 0;

  return (
    <Fragment>
      <SCard color={memoColor} className='card' ref={cardRef} gridRowSpan={gridRowSpan}>
        <div className='growing-content' onClick={openEditModalHandler}>
          {/* images */}
          {images.length > 0 && <CardImages images={images} />}
          {/* header */}
          {title && <CardHeader>{title}</CardHeader>}
          {/* content */}
          {content && <CardContent>{content}</CardContent>}
          {/* labels */}
          {labels.length > 0 && <CardLabels labels={labels} />}
          {/* footer */}
          <CardFooter
            isOnlyImages={isOnlyImages}
            isOnlyLinks={isOnlyLinks}
            isOnlyImagesAndLinks={isOnlyImagesAndLinks}
          />
          {/* links */}
          {links.length > 0 && <CardLinks links={links} isOnlyLinks={isOnlyLinks} />}
        </div>
      </SCard>
    </Fragment>
  );
};

export default Card;
