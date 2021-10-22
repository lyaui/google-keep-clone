import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
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
import EmptyCardEditor from 'components/EditCard/EmptyCardEditor';
import EditCard from 'components/EditCard';
import Cards from 'components/Cards';

const Main = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const { path } = match;
  const { search } = useLocation();
  const edit = !!new URLSearchParams(search).get('edit');
  const [isEditQueryTrue, setIsEditQueryTrue] = useState(edit);

  const { memos } = useSelector((state) => state.memos);
  const { labelName, memoId } = match.params;

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

  const pinnedMemo = memos.filter((memo) => memo.isPinned);
  const unpinnedMemo = memos.filter((memo) => !memo.isPinned);

  useEffect(() => {
    setIsEditQueryTrue(edit);
  }, [edit]);

  return (
    <Layout>
      {!isEditQueryTrue && <EmptyCardEditor />}
      {isEditQueryTrue && <EditCard />}
      {/* isPinned === true */}
      {pinnedMemo.length > 0 && <Cards memos={pinnedMemo} title={'已固定'} />}
      {/* isPinned === false */}
      {unpinnedMemo.length > 0 && (
        <Cards memos={unpinnedMemo} title={pinnedMemo.length > 0 ? '其他記事' : ''} />
      )}
      <Modal showModal={showEditModal} closeModal={closeEditModalHandler}>
        <EditCard />
      </Modal>
    </Layout>
  );
};

export default Main;
