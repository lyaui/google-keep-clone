import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from '@/store/memosSlice';
import EditCardText from '@/components/EditCard/EditCardText';
import { SEditCardContent } from '@/components/EditCard/EditCardContent/style.jsx';

const EditCardContent = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);

  const updateContentHandler = (content) =>
    dispatch(memosActions.updateMemo({ content }));

  return (
    <SEditCardContent>
      <EditCardText
        text={memo.content}
        updateTextHandler={updateContentHandler}
      />
    </SEditCardContent>
  );
};

export default EditCardContent;
