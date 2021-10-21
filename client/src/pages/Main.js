import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  getUserMemos,
  getUserMemosByLabelName,
  getUserMemoByMemoId,
} from 'store/memosSlice/memos-action.js';
import { memosActions } from 'store/memosSlice';
import { toast } from 'react-toastify';
import { TOAST_TEXT } from 'constants/toastText.js';
import { ROUTE } from 'constants/routes.js';
import { useUI, getUserSettings } from 'contexts/UI-context/index.js';
import Modal from 'components/UI/Modal';
import Layout from 'components/Layout';
import EditCard from 'components/EditCard';
import Cards from 'components/Cards';

const Main = () => {
  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);
  const history = useHistory();
  const match = useRouteMatch();
  const { labelName, memoId } = match.params;
  const { path } = match;
  const { UIDispatch } = useUI();
  const [showEditModal, setShowEditModal] = useState(false);

  // fetch user settings
  useEffect(() => {
    (async () => {
      try {
        const res = await getUserSettings(UIDispatch);
        if (!res.success) throw new Error();
      } catch {
        toast(TOAST_TEXT.SETTINGS_FAIL);
        history.replace(ROUTE.LOGIN);
      }
    })();
  }, [history, UIDispatch]);

  // fetch memos
  useEffect(() => {
    (async () => {
      switch (path) {
        case ROUTE.HOME:
          dispatch(getUserMemos());
          return;

        case ROUTE.LABEL:
          dispatch(getUserMemosByLabelName(labelName));
          return;

        case ROUTE.MEMO:
          await dispatch(getUserMemoByMemoId(memoId));
          setShowEditModal(true);
          return;

        default:
          dispatch(getUserMemos());
          return;
      }
    })();
  }, [path, dispatch, labelName, memoId, history]);

  const closeEditModalHandler = () => {
    setShowEditModal(false);
    dispatch(memosActions.resetMemo());
    history.push(ROUTE.HOME);
  };

  return (
    <Layout>
      <EditCard showMemo={path !== ROUTE.MEMO} />
      {/* isPinned === true */}
      <Cards memos={memos} title={'已固定'} />

      {/* isPinned === false */}
      <Cards memos={memos} title={'其他記事'} />
      <Modal showModal={showEditModal} closeModal={closeEditModalHandler}>
        <EditCard />
      </Modal>
    </Layout>
  );
};

export default Main;
