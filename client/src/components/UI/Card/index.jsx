import { useState, useEffect, useRef } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ROUTE } from '@/constants/routes.js';
import { PALETTE_COLORS } from '@/constants/paletteColors.js';
import { useUI } from '@/contexts/UI-context';

import EditCardPinButton from '@/components/ActionButtons/EditCardPinButton';
import CardImages from '@/components/UI/Card/CardImages';
import CardHeader from '@/components/UI/Card/CardHeader';
import CardBody from '@/components/UI/Card/CardBody';
import EditCardText from '@/components/EditCard/EditCardText';
import EditTaskItem from '@/components/EditCard/EditTasks/EditTaskItem';
import CardLabels from '@/components/UI/Card/CardLabels';
import CardFooter from '@/components/UI/Card/CardFooter';
import CardLinks from '@/components/UI/Card/CardLinks';

import { SCard, SEmptyText } from '@/components/UI/Card/style.jsx';
import { SEditCardText } from '@/components/EditCard/EditCardText/style.jsx';

const Card = ({ card, masonryDom }) => {
  const history = useHistory();
  const {
    params: { memoId },
  } = useRouteMatch();
  const cardRef = useRef();
  const [gridRowSpan, setGridRowSpan] = useState(0);
  const {
    _id: id,
    title,
    content,
    images,
    links,
    labels,
    isTaskList,
    tasks,
    color,
  } = card;
  const {
    UIState: { theme },
  } = useUI();
  const memoColor = PALETTE_COLORS[color][theme];

  const openEditModalHandler = () => history.push(ROUTE.BUILD_MEMO_PATH(id));

  // calculate card spans
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
      (cardRefDOM.querySelector('.growing-content').getBoundingClientRect()
        .height +
        rowGap) /
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

  const noCardBody =
    !title &&
    (!content || content === '<br>') &&
    tasks.length === 0 &&
    labels.length === 0;
  const isOnlyImages = noCardBody && links.length === 0 && images.length > 0;
  const isOnlyLinks = noCardBody && images.length === 0 && links.length > 0;
  const isOnlyImagesAndLinks =
    noCardBody && images.length > 0 && links.length > 0;
  const showEmptyText = noCardBody && images.length === 0 && links.length === 0;

  const borderColor =
    memoColor === PALETTE_COLORS.DEFAULT.LIGHT
      ? 'var(--color-gray-200)'
      : memoColor === PALETTE_COLORS.DEFAULT.DARK
      ? 'var(--color-gray-600)'
      : memoColor;

  return (
    <SCard
      className='card'
      ref={cardRef}
      style={{
        '--color': memoColor,
        '--border-color': borderColor,
        '--opacity': memoId === id ? 0 : 1,
        '--rowSpan': gridRowSpan,
      }}
    >
      <div className='growing-content' onClick={openEditModalHandler}>
        {/* pin */}
        <EditCardPinButton id={id} />
        {/* images */}
        {images.length > 0 && (
          <CardImages images={images} noCardBody={noCardBody} />
        )}
        {/* header */}
        {title && <CardHeader>{title}</CardHeader>}
        {/* content */}
        {!noCardBody && (
          <CardBody>
            {/* content */}
            {!isTaskList && content && (
              <SEditCardText>
                <EditCardText text={content} updateTextHandler={() => {}} />
              </SEditCardText>
            )}
            {/* tasks */}
            {isTaskList &&
              tasks.map((task, index) => (
                <EditTaskItem key={task.id} task={task} index={index} id={id} />
              ))}

            {/* labels */}
            {labels.length > 0 && <CardLabels labels={labels} id={id} />}
          </CardBody>
        )}

        {showEmptyText && <SEmptyText>空白記事</SEmptyText>}

        {/* footer */}
        <CardFooter
          id={id}
          isOnlyImages={isOnlyImages}
          isOnlyLinks={isOnlyLinks}
          isOnlyImagesAndLinks={isOnlyImagesAndLinks}
        />
        {/* links */}
        {links.length > 0 && (
          <CardLinks links={links} isOnlyLinks={isOnlyLinks} />
        )}
      </div>
    </SCard>
  );
};

export default Card;
