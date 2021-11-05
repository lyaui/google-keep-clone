import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useFetchMemos = ({ action, params }) => {
  const dispatch = useDispatch();
  const { memos, isLoading } = useSelector((state) => state.memos);

  useEffect(() => {
    if (!action) return;
    const promise = dispatch(action(params));
    return async () => promise.abort();
  }, [action, dispatch, params]);

  const pinnedMemo = memos.filter((memo) => memo.isPinned);
  const unpinnedMemo = memos.filter((memo) => !memo.isPinned);

  return { memos, pinnedMemo, unpinnedMemo, isLoading };
};
