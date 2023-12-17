import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Memo } from '@/types';
import { ROUTER_PATH } from '@/routes';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import { useUI } from '@/contexts/UI-context';
import EditCardPinButton from '@/components/ActionButtons/EditCardPinButton';
import CardImages from '@/components/UI/Card/CardImages';
import CardHeader from '@/components/UI/Card/CardHeader';
import CardBody from '@/components/UI/Card/CardBody';
import EditMemoText from '@/components/EditCard/EditMemoText';
import EditTaskItem from '@/components/EditCard/EditTasks/EditTaskItem';
import CardLabels from '@/components/UI/Card/CardLabels';
import CardFooter from '@/components/UI/Card/CardFooter';
import CardLinks from '@/components/UI/Card/CardLinks';
import { SCard, SEmptyText } from '@/components/UI/Card/style';
import { SEditMemoText } from '@/components/EditCard/EditMemoText/style';

interface MemoCardProps {
  card: Memo;
  masonryDom: HTMLDivElement | null;
}

function MemoCard({ card, masonryDom }: MemoCardProps) {
  const navigate = useNavigate();

  const cardRef = useRef<HTMLDivElement>(null);
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

  const openEditModalHandler = () => navigate(ROUTER_PATH.BUILD_MEMO_PATH(id));

  const getRowSpan = () => {
    const cardRefDOM = cardRef.current;
    const grid = masonryDom;
    if (!grid || !cardRefDOM) return;

    const rowGap = parseInt(
      window
        .getComputedStyle(grid.querySelector('.masonry')!)
        .getPropertyValue('grid-row-gap')
        .replace('px', '')
    );
    const rowHeight = parseInt(
      window
        .getComputedStyle(grid.querySelector('.masonry')!)
        .getPropertyValue('grid-auto-rows')
        .replace('px', '')
    );
    const rowSpan = Math.ceil(
      (cardRefDOM.querySelector('.growing-content')!.getBoundingClientRect()
        .height +
        rowGap) /
        (rowHeight + rowGap)
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
    (!content.trim() || content === '<br>') &&
    tasks.length === 0 &&
    labels.length === 0;
  const isOnlyImages = noCardBody && links.length === 0 && images.length > 0;
  const isOnlyLinks = noCardBody && images.length === 0 && links.length > 0;
  const isOnlyImagesAndLinks =
    noCardBody && images.length > 0 && links.length > 0;

  const showEmptyText = noCardBody && images.length === 0 && links.length === 0;

  return (
    <SCard
      className="card"
      ref={cardRef}
      gridRowSpan={gridRowSpan}
      color={memoColor}
      style={{ gridRow: `span ${gridRowSpan}` }}
    >
      <div className="growing-content" onClick={openEditModalHandler}>
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
              <SEditMemoText>
                <EditMemoText text={content} updateTextHandler={() => {}} />
              </SEditMemoText>
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
}

export default MemoCard;
