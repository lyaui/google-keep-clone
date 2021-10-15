import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import EditCardText from 'components/EditCard/EditCardText';
import { SEditCardTitle } from 'components/EditCard/EditCardTitle/style.js';

const EditCardTitle = () => {
  const dispatch = useDispatch();
  const { memo } = useSelector((state) => state.memos);

  const fetchTitleHandler = () => memo.title;
  const updateTitleHandler = (title) => dispatch(memosActions.updateMemo({ title }));

  return (
    <SEditCardTitle>
      <EditCardText fetchTextHandler={fetchTitleHandler} updateTextHandler={updateTitleHandler} />
    </SEditCardTitle>
  );
};

export default EditCardTitle;
