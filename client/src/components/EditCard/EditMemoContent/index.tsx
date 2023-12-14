import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import EditMemoText from '@/components/EditCard/EditMemoText';
import { SEditMemoContent } from '@/components/EditCard/EditMemoContent/style';

function EditMemoContent() {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);

  const updateContentHandler = (content: string) =>
    dispatch(memosActions.updateMemo({ content }));

  return (
    <SEditMemoContent>
      <EditMemoText
        text={memo.content}
        updateTextHandler={updateContentHandler}
      />
    </SEditMemoContent>
  );
}

export default EditMemoContent;
