import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DragDropContext, type DropResult } from 'react-beautiful-dnd';

import type { DraftMemo, Memo } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import { useUpdateMemo } from '@/hooks/useUpdateMemo';
import { addMemo } from '@/store/memosSlice/memos-action';
import { useUI } from '@/contexts/UI-context';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import EditCardPinButton from '@/components/ActionButtons/EditCardPinButton';
import EditMemoImages from '@/components/EditCard/EditMemoImages';
import EditMemoTitle from '@/components/EditCard/EditMemoTitle';
import EditMemoContent from '@/components/EditCard/EditMemoContent';
import EditTasks from '@/components/EditCard/EditTasks';
import EditMemoLink from '@/components/EditCard/EditMemoLink';
import EditMemoLabels from '@/components/EditCard/EditMemoLabels';
import EditMemoToolbar from '@/components/EditCard/EditMemoToolbar';
import {
  SEditCard,
  SEditCardBody,
  SCardCreatedAt,
} from '@/components/EditCard/style';
import OutsideClickHandler from 'react-outside-click-handler';

function isExistingMemo(currentMemo: Memo | DraftMemo): currentMemo is Memo {
  return currentMemo.hasOwnProperty('_id');
}

function EditCard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { memoId } = useParams();
  const { dispatchUpdateMemo } = useUpdateMemo(memoId);

  const { memo, isLoading } = useAppSelector((state) => state.memos);
  const { isTaskList, color } = memo;
  const { UIState } = useUI();
  const memoColor = PALETTE_COLORS[color][UIState.theme];

  const { tasks } = memo;

  const clickOutsideHandler = async (event: globalThis.MouseEvent) => {
    event.stopPropagation();
    if (isLoading) return;

    if (isExistingMemo(memo)) {
      await dispatchUpdateMemo(memo);
    } else {
      await dispatch(
        addMemo({ ...memo, labels: memo.labels.map((label) => label._id) })
      );
    }

    navigate({ search: '' });
    dispatch(memosActions.resetMemo());
    return;
  };

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    const { source, destination } = result;
    // if item is not in the destination scope
    if (!destination) return;

    // if item is in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    let arr = [...tasks];
    const [remove] = arr.splice(source.index, 1);
    arr.splice(destination.index, 0, remove);
    dispatch(memosActions.updateMemo({ tasks: arr }));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <SEditCard color={memoColor} eventTypes="click">
        <OutsideClickHandler onOutsideClick={clickOutsideHandler}>
          <SEditCardBody>
            {/* pin */}
            <EditCardPinButton />
            {/* images */}
            <EditMemoImages />
            {/* title */}
            <EditMemoTitle />
            {/* tasks | content */}
            {isTaskList ? <EditTasks /> : <EditMemoContent />}
            {/* label */}
            {memo.labels.length > 0 && <EditMemoLabels />}
            {/* updatedAt */}
            {isExistingMemo(memo) && (
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
            {memo.links.length > 0 && <EditMemoLink />}
          </SEditCardBody>
          {/* toolbar */}
          <EditMemoToolbar />
        </OutsideClickHandler>
      </SEditCard>
    </DragDropContext>
  );
}

export default memo(EditCard);
