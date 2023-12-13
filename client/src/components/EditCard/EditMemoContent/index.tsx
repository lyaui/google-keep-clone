import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import EditCardText from '@/components/EditCard/EditCardText';
import { SEditMemoContent } from '@/components/EditCard/EditMemoContent/style';

function EditMemoContent() {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);

  const updateContentHandler = (content: string) =>
    dispatch(memosActions.updateMemo({ content }));

  return (
    <SEditMemoContent>
      <EditCardText
        text={memo.content}
        updateTextHandler={updateContentHandler}
      />
    </SEditMemoContent>
  );
}

export default EditMemoContent;
