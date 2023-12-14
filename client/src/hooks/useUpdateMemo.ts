import { useCallback } from 'react';

import type { DraftMemo } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import { updateMemo } from '@/store/memosSlice/memos-action';

export const useUpdateMemo = (id?: string) => {
  const dispatch = useAppDispatch();
  const { memos, memo, isLoading } = useAppSelector((state) => state.memos);
  const currentMemo = memos.find((memo) => memo._id === id) || memo;

  const dispatchUpdateMemo = useCallback(
    (updatedItem: Partial<DraftMemo>) => {
      if (isLoading) return;
      id
        ? dispatch(updateMemo({ memoId: id, payload: updatedItem }))
        : dispatch(memosActions.updateMemo(updatedItem));
    },
    [isLoading, id, dispatch]
  );

  return { currentMemo, dispatchUpdateMemo };
};
