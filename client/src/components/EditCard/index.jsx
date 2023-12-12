import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { memosActions } from '@/store/memosSlice';
import { useUpdateMemo } from '@/hooks/updateMemo-hook';
import { addMemo } from '@/store/memosSlice/memos-action';
import { useUI } from '@/contexts/UI-context';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import EditCardPinButton from '@/components/ActionButtons/EditCardPinButton';
import EditCardImages from '@/components/EditCard/EditCardImages';
import CreateMemoTitle from '@/components/EditCard/CreateMemoTitle';
import CreateMemoContent from '@/components/EditCard/CreateMemoContent';
import EditTasks from '@/components/EditCard/EditTasks';
import CreateMemoLink from '@/components/EditCard/CreateMemoLink';
import CreateMemoLabels from '@/components/EditCard/CreateMemoLabels';
import CreateMemoToolbar from '@/components/EditCard/CreateMemoToolbar';
import {
  SEditCard,
  SEditCardBody,
  SCardCreatedAt,
} from '@/components/EditCard/style';
import OutsideClickHandler from 'react-outside-click-handler';

function EditCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEmptyPost, setIsEmptyPost] = useState(true);

  const { memoId } = useParams();
  const { dispatchUpdateMemo } = useUpdateMemo(memoId);

  const { memo, isLoading, isMemoUpdated } = useSelector(
    (state) => state.memos
  );
  const isNewPost = !!memo._id;
  const { isTaskList, color } = memo;
  const { UIState } = useUI();
  const memoColor = PALETTE_COLORS[color][UIState.theme];

  useEffect(() => {
    setIsEmptyPost(
      !memo.title &&
        !memo.content &&
        memo.images.length === 0 &&
        memo.links.length === 0 &&
        memo.tasks.length === 0
    );
  }, [memo]);

  const clickOutsideHandler = async (e) => {
    e.stopPropagation();
    if (isLoading) return;

    // post new post
    if (!isEmptyPost && isNewPost)
      await dispatch(
        addMemo({ ...memo, labels: memo.labels.map((label) => label._id) })
      );

    // edit memo
    if (!isNewPost && isMemoUpdated) await dispatchUpdateMemo(memo);
    navigate({ search: '' });
    dispatch(memosActions.resetMemo());
  };

  return (
    <SEditCard style={{ '--color': memoColor }} eventTypes="click">
      <OutsideClickHandler onOutsideClick={clickOutsideHandler}>
        <SEditCardBody>
          {/* pin */}
          <EditCardPinButton />
          {/* images */}
          <EditCardImages />
          {/* title */}
          <CreateMemoTitle />
          {/* tasks | content */}
          {isTaskList ? <EditTasks /> : <CreateMemoContent />}
          {/* label */}
          {memo.labels.length > 0 && <CreateMemoLabels />}
          {/* updatedAt */}
          {memo.updatedAt && (
            <SCardCreatedAt>
              {memo.isArchived && '已封存記事 • '}上次編輯時間：
              {new Date(memo.updatedAt).toLocaleTimeString([], {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              })}
            </SCardCreatedAt>
          )}
          {/* links */}
          {memo.links.length > 0 && <CreateMemoLink />}
        </SEditCardBody>
        {/* toolbar */}
        <CreateMemoToolbar />
      </OutsideClickHandler>
    </SEditCard>
  );
}

export default EditCard;
