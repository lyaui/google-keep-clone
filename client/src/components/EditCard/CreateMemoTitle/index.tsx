import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import EditCardText from '@/components/EditCard/EditCardText';
import { SEditCardText } from '@/components/EditCard/EditCardText/style';

export const SCreateMemoTitle = styled(SEditCardText)`
  #contentEdit {
    font-size: var(--text-lg);
    &:empty:before {
      content: '標題';
      color: hsla(var(--color-gray-500));
    }
  }
`;

const CreateMemoTitle = () => {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);

  const updateTitleHandler = (title: string) =>
    dispatch(memosActions.updateMemo({ title }));

  return (
    <SCreateMemoTitle>
      <EditCardText text={memo.title} updateTextHandler={updateTitleHandler} />
    </SCreateMemoTitle>
  );
};

export default CreateMemoTitle;
