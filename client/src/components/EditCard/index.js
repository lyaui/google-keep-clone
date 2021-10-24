import { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { useUpdateMemo } from 'hooks/updateMemo-hook.js';
import { addMemo } from 'store/memosSlice/memos-action.js';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import EditCardPinButton from 'components/ActionButtons/EditCardPinButton';
import EditCardImages from 'components/EditCard/EditCardImages';
import EditCardTitle from 'components/EditCard/EditCardTitle';
import EditCardContent from 'components/EditCard/EditCardContent';
import EditTasks from 'components/EditCard/EditTasks';
import EditCardLink from 'components/EditCard/EditCardLink';
import EditCardLabels from 'components/EditCard/EditCardLabels';
import EditCardToolbar from 'components/EditCard/EditCardToolbar';
import { SEditCard, SEditCardBody, SCardCreatedAt } from 'components/EditCard/style.js';
import OutsideClickHandler from 'react-outside-click-handler';

function EditCard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isEmptyPost, setIsEmptyPost] = useState(true);

  const match = useRouteMatch();
  const { memoId } = match.params;
  const isNewPost = memoId ? false : true;
  const { dispatchUpdateMemo } = useUpdateMemo(memoId);

  const { memo, isLoading, isMemoUpdated } = useSelector((state) => state.memos);
  const { isTaskList, color } = memo;
  const memoColor = PALETTE_COLORS[color];

  useEffect(() => {
    setIsEmptyPost(
      !memo.title &&
        !memo.content &&
        memo.images.length === 0 &&
        memo.links.length === 0 &&
        memo.tasks.length === 0,
    );
  }, [memo]);

  const clickOutsideHandler = async (e) => {
    e.stopPropagation();
    if (isLoading) return;

    // post new post
    if (!isEmptyPost && isNewPost)
      await dispatch(addMemo({ ...memo, labels: memo.labels.map((label) => label._id) }));

    // edit memo
    if (!isNewPost && isMemoUpdated) await dispatchUpdateMemo(memo);
    history.push({ search: '' });
    dispatch(memosActions.resetMemo());
  };

  return (
    <SEditCard memoColor={memoColor} eventTypes='click'>
      <OutsideClickHandler onOutsideClick={clickOutsideHandler}>
        <SEditCardBody>
          {/* pin */}
          <EditCardPinButton />
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
