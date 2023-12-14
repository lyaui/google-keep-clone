import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import EditMemoText from '@/components/EditCard/EditMemoText';
import { SEditMemoText } from '@/components/EditCard/EditMemoText/style';

export const SEditMemoTitle = styled(SEditMemoText)`
  #contentEdit {
    font-size: var(--text-lg);
    &:empty:before {
      content: '標題';
      color: hsla(var(--color-gray-500));
    }
  }
`;

const EditMemoTitle = () => {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);

  const updateTitleHandler = (title: string) =>
    dispatch(memosActions.updateMemo({ title }));

  return (
    <SEditMemoTitle>
      <EditMemoText text={memo.title} updateTextHandler={updateTitleHandler} />
    </SEditMemoTitle>
  );
};

export default EditMemoTitle;
