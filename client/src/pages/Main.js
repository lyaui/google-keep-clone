import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { memosActions } from 'store/memosSlice';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import { ROUTE } from 'constants/routes.js';
import { useAuth } from 'contexts/auth-context';
import { useUI, getUserSettings } from 'contexts/UI-context/index.js';
import Modal from 'components/UI/Modal';
import Layout from 'components/Layout';
import EditCard from 'components/EditCard';
import Cards from 'components/Cards';

const Main = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const { memos } = useSelector((state) => state.memos);
  const { memoId } = match.params;
  const { UIDispatch } = useUI();
  const { authState } = useAuth();
  const userId = authState.userId;
  const [showEditModal, setShowEditModal] = useState(false);

  const closeEditModalHandler = () => {
    setShowEditModal(false);
    dispatch(memosActions.resetMemo());
    history.push(ROUTE.HOME);
  };

  // fetch user settings
  useEffect(() => {
    (async () => {
      if (!userId) return history.replace(ROUTE.LOGIN);
      try {
        const res = await getUserSettings(UIDispatch, { userId });
        if (!res.success) throw new Error();
      } catch {
        toast(TOAST_TEXT.SETTINGS_FAIL);
        history.replace(ROUTE.LOGIN);
      }
    })();
  }, [history, UIDispatch, userId]);

  // open edit modal
  useEffect(() => {
    console.log({ memoId });
    if (!memoId) return history.push(ROUTE.HOME);
    // TODO fetch data
    // memoId existed? memoId not existed?

    // temp
    const selectedMemo = memos.find((memo) => memo._id === memoId);
    if (!selectedMemo) return history.push(ROUTE.HOME);

    dispatch(memosActions.setMemo(selectedMemo));
    setShowEditModal(true);
  }, [dispatch, history, memos, memoId]);

  return (
    <Layout>
      <EditCard showMemo={!memoId} />
      <Cards />
      <Modal showModal={showEditModal} closeModal={closeEditModalHandler}>
        <EditCard />
      </Modal>
    </Layout>
  );
};

export default Main;
