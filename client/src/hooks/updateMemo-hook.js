import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { updateMemo } from 'store/memosSlice/memos-action.js';

export const useUpdateMemo = (id) => {
  const dispatch = useDispatch();
  const { memos, memo, isLoading } = useSelector((state) => state.memos);
  const currentMemo = memos.find((memo) => memo._id === id) || memo;

  const dispatchUpdateMemo = (updatedItem) => {
    if (isLoading) return;
    id
      ? dispatch(updateMemo({ memoId: id, payload: updatedItem }))
      : dispatch(memosActions.updateMemo(updatedItem));
  };

  return { currentMemo, dispatchUpdateMemo };
};
