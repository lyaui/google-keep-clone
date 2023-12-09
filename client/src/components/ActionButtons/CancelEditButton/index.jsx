import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { memosActions } from '@/store/memosSlice';
import { ROUTER_PATH } from '@/routes';
import { SCancelEditButton } from '@/components/ActionButtons/CancelEditButton/style';

function CancelEditButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');

  const cancelEditHandler = (e) => {
    e.preventDefault();
    if (editQuery) {
      navigate({ search: null });
    } else {
      navigate(ROUTER_PATH.HOME);
    }
    dispatch(memosActions.resetMemo());
  };

  return (
    <SCancelEditButton onClick={cancelEditHandler}>取消編輯</SCancelEditButton>
  );
}

export default CancelEditButton;
