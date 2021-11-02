import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { memosActions } from 'store/memosSlice';
import { getUserMemoByMemoId } from 'store/memosSlice/memos-action.js';
import { ROUTE } from 'constants/routes.js';
import Modal from 'components/UI/Modal';
import EditCard from 'components/EditCard';

const EditModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { path, url } = match;
  const [showEditModal, setShowEditModal] = useState(false);
  const [savedRoute, setSavedRoute] = useState(null);

  const { memoId } = match.params;
  const {
    memo: { _id: id },
  } = useSelector((state) => state.memos);

  // fetch memo details
  useEffect(() => {
    if (path !== ROUTE.MEMO) return;
    const promise = dispatch(getUserMemoByMemoId(memoId));
    return async () => promise.abort();
  }, [path, dispatch, memoId]);

  // open edit modal
  useEffect(() => {
    if (path === ROUTE.MEMO && id) setShowEditModal(true);
  }, [path, id]);

  // remember path url
  useEffect(() => {
    if (path === ROUTE.MEMO) return;
    setSavedRoute(url);
  }, [path, url]);

  const closeEditModalHandler = (e) => {
    e.preventDefault();
    setShowEditModal(false);
    dispatch(memosActions.resetMemo());

    if (!savedRoute) return history.push(ROUTE.HOME);
    history.push(savedRoute);
  };

  return (
    <Modal showModal={showEditModal} closeModal={closeEditModalHandler}>
      <EditCard />
    </Modal>
  );
};

export default EditModal;
