import { type MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { memosActions } from '@/store/memosSlice';
import { ROUTER_PATH } from '@/routes';
import Button from '@/components/UI/Buttons';

function CancelEditButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { edit } = useParams();
  const editQuery = !!edit;

  const cancelEditHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (editQuery) {
      navigate({});
    } else {
      navigate(ROUTER_PATH.HOME);
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
