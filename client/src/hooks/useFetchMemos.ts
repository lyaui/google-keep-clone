import { useEffect } from 'react';
import { type AsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';

import { type MemoState } from '@/store/memosSlice';

interface UseFetchMemos {
  action: AsyncThunk<MemoState, Record<string, string>, {}>;
  params: Record<string, string>;
}

export function useFetchMemos({ action, params }: UseFetchMemos) {
  const dispatch = useAppDispatch();
  const { memo, memos, isLoading } = useAppSelector((state) => state.memos);

  useEffect(() => {
    if (!action) return;
    const promise = dispatch(action(params));

    return () => {
      promise.abort();
    };
  }, [action, dispatch, params]);

  const pinnedMemo = memos.filter((memo) => memo.isPinned);
  const unpinnedMemo = memos.filter((memo) => !memo.isPinned);

  return { memo, memos, pinnedMemo, unpinnedMemo, isLoading };
}
