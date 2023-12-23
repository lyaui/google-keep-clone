import { type MouseEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { memosActions } from '@/store/memosSlice';
import Button from '@/components/UI/Buttons';

function CancelEditButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { search } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');

  const cancelEditHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (editQuery) {
      navigate({});
    } else {
      navigate(-1);
    }
    dispatch(memosActions.resetMemo());
  };

  return (
    <Button
      variant="text"
      onClick={cancelEditHandler}
      style={{
        opacity: 0.6,
        padding: 16,
        marginLeft: 'auto',
      }}
    >
      取消編輯
    </Button>
  );
}

export default CancelEditButton;
