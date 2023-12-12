import { useAppDispatch, useAppSelector } from '@/hooks/useReduxStore';
import { memosActions } from '@/store/memosSlice';
import EditCardText from '@/components/EditCard/EditCardText';
import { SCreateMemoContent } from '@/components/EditCard/CreateMemoContent/style';

function CreateMemoContent() {
  const dispatch = useAppDispatch();
  const { memo } = useAppSelector((state) => state.memos);

  const updateContentHandler = (content: string) =>
    dispatch(memosActions.updateMemo({ content }));

  return (
    <SCreateMemoContent>
      <EditCardText
        text={memo.content}
        updateTextHandler={updateContentHandler}
      />
    </SCreateMemoContent>
  );
}

export default CreateMemoContent;
