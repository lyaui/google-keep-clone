import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'contexts/auth-context';
import { addMemo } from 'store/memosSlice/memos-action.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardTitle from 'components/EditCard/EditCardTitle';
import EditCardContent from 'components/EditCard/EditCardContent';
import EditTasks from 'components/EditCard/EditTasks';
import EditCardLink from 'components/EditCard/EditCardLink';
import EditCardLabels from 'components/EditCard/EditCardLabels';
import EditCardToolbar from 'components/EditCard/EditCardToolbar';
import {
  SEditCard,
  SEditCardBody,
  SCardCreatedAt,
  SEmptyEditor,
} from 'components/EditCard/style.js';
import OutsideClickHandler from 'react-outside-click-handler';

function EditCard({ showMemo = true }) {
  const dispatch = useDispatch();

  const { memo } = useSelector((state) => state.memos);
  const { isTaskList, color } = memo;
  const memoColor = PALETTE_COLORS[color];

  const { authState } = useAuth();
  const { userId } = authState;

  const [isEmptyPost, setIsEmptyPost] = useState(true);
  const match = useRouteMatch();

  const { memoId } = match.params;
  const isNewPost = memoId ? false : true;

  useEffect(() => {
    setIsEmptyPost(
      !memo.title &&
        !memo.content &&
        memo.images.length === 0 &&
        memo.isPinned === false &&
        memo.isArchived === false &&
        memo.links.length === 0 &&
        memo.labels.length === 0 &&
        memo.tasks.length === 0 &&
        memo.color === 'DEFAULT',
    );
  }, [memo]);
  if (!showMemo) return <SEmptyEditor />;

  const clickOutsideHandler = (e) => {
    e.preventDefault();

    // TODO debounce
    // post new post
    if (!isEmptyPost && isNewPost)
      dispatch(
        addMemo({ creator: userId, ...memo, labels: memo.labels.map((label) => label._id) }),
      );

    // edit memo
    if (!isNewPost) {
    }
  };

  if (!showMemo) return <SEmptyEditor />;
  return (
    <SEditCard memoColor={memoColor} eventTypes='click'>
      <OutsideClickHandler onOutsideClick={clickOutsideHandler}>
        <SEditCardBody>
          {/* images */}
          <EditCardImages />
          {/* title */}
          <EditCardTitle />
          {/* content */}
          {!isTaskList && <EditCardContent />}
          {/* tasks */}
          {isTaskList && <EditTasks />}
          {/* label */}
          {memo.labels.length > 0 && <EditCardLabels />}
          {/* updatedAt */}
          {memo.updatedAt && (
            <SCardCreatedAt>
              {memo.isArchived && '已封存記事 • '}上次編輯時間：
              {new Date(memo.updatedAt).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </SCardCreatedAt>
          )}
          {/* links */}
          {memo.links.length > 0 && <EditCardLink />}
        </SEditCardBody>
        {/* toolbar */}
        <EditCardToolbar />
      </OutsideClickHandler>
    </SEditCard>
  );
}

export default EditCard;
