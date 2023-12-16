import { useEffect } from 'react';
import { type AsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';

import { type MemoState } from '@/store/memosSlice';

interface UseFetchMemos<T> {
  action: AsyncThunk<MemoState, T, {}>;
  params: T;
}

export function useFetchMemos<T extends Object>({
  action,
  params,
}: UseFetchMemos<T>) {
  const dispatch = useAppDispatch();
  const { memo, memos, isLoading } = useAppSelector((state) => state.memos);

  const fetchMemos = () => {
    const promise = dispatch(action(params));
    return async () => promise.abort();
  };

  useEffect(() => {
    if (!action) return;
    fetchMemos();
  }, [action, dispatch, params]);

  const pinnedMemo = memos.filter((memo) => memo.isPinned);
  const unpinnedMemo = memos.filter((memo) => !memo.isPinned);

  return { memo, memos, pinnedMemo, unpinnedMemo, isLoading };
}
