import { Fragment, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ROUTE } from 'constants/routes.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import EditCardPinButton from 'components/ActionButtons/EditCardPinButton';
import CardImages from 'components/UI/Card/CardImages';
import CardHeader from 'components/UI/Card/CardHeader';
import CardBody from 'components/UI/Card/CardBody';
import EditCardText from 'components/EditCard/EditCardText';
import EditTaskItem from 'components/EditCard/EditTasks/EditTaskItem';
import CardLabels from 'components/UI/Card/CardLabels';
import CardFooter from 'components/UI/Card/CardFooter';
import CardLinks from 'components/UI/Card/CardLinks';
import { SCard } from 'components/UI/Card/style.js';
import { SEditCardText } from 'components/EditCard/EditCardText/style.js';

const Card = ({ card, masonryDom }) => {
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.memos);
  const cardRef = useRef();
  const [gridRowSpan, setGridRowSpan] = useState(0);
  const { _id: id, title, content, images, links, labels, isTaskList, tasks, color } = card;
  const memoColor = PALETTE_COLORS[color];

  const openEditModalHandler = () => {
    if (isLoading) return;
    history.push(ROUTE.BUILD_MEMO_PATH(id));
  };

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

  const noCardBody = !title && !content && tasks.length === 0 && labels.length === 0;
  const isOnlyImages = noCardBody && links.length === 0 && images.length > 0;
  const isOnlyLinks = noCardBody && images.length === 0 && links.length > 0;
  const isOnlyImagesAndLinks = noCardBody && images.length > 0 && links.length > 0;

  return (
    <Fragment>
      <SCard color={memoColor} className='card' ref={cardRef} gridRowSpan={gridRowSpan}>
        <div className='growing-content' onClick={openEditModalHandler}>
          {/* pin */}
          <EditCardPinButton id={id} />
          {/* images */}
          {images.length > 0 && <CardImages images={images} />}
          {/* header */}
          {title && <CardHeader>{title}</CardHeader>}
          {/* content */}

          {
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

              {/* <EditTasks /> */}
              {images.length === 0 &&
                !title &&
                !content &&
                links.length === 0 &&
                tasks.length === 0 && <p>空白記事</p>}
            </CardBody>
          }

          {/* labels */}
          {labels.length > 0 && <CardLabels labels={labels} id={id} />}
          {/* footer */}
          <CardFooter
            id={id}
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
