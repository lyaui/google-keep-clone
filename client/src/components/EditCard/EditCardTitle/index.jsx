import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from '@/store/memosSlice';
import EditCardText from '@/components/EditCard/EditCardText';
import { SEditCardTitle } from '@/components/EditCard/EditCardTitle/style.jsx';

const EditCardTitle = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);

  const updateTitleHandler = (title) =>
    dispatch(memosActions.updateMemo({ title }));

  return (
    <SEditCardTitle>
      <EditCardText text={memo.title} updateTextHandler={updateTitleHandler} />
    </SEditCardTitle>
  );
};

export default EditCardTitle;
