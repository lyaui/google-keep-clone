import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { ROUTE } from 'constants/routes.js';
import { SCancelEditButton } from 'components/ActionButtons/CancelEditButton/style.js';

const CancelEditButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');

  const cancelEditHandler = (e) => {
    e.preventDefault();
    if (editQuery) {
      history.push({ search: null });
    } else {
      history.push(ROUTE.HOME);
    }
    dispatch(memosActions.resetMemo());
  };

  return <SCancelEditButton onClick={cancelEditHandler}>取消編輯</SCancelEditButton>;
};

export default CancelEditButton;
