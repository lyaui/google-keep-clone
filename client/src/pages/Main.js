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
  const editQuery = !!new URLSearchParams(search).get('edit');
  const searchQuery = new URLSearchParams(search).get('q');

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
    let promise;
    switch (path) {
      case ROUTE.HOME:
        dispatch(getUserMemos());
        break;

      case ROUTE.LABEL:
        promise = dispatch(getUserMemosByLabelName(labelName));
        break;

      case ROUTE.MEMO:
        dispatch(getUserMemoByMemoId(memoId));
        setShowEditModal(true);
        break;

      case ROUTE.ARCHIVE:
        dispatch(getUserMemos({ isArchived: true }));
        break;

      case ROUTE.SEARCH:
        if (!searchQuery) return;
        promise = dispatch(getUserMemos({ q: searchQuery }));
        break;

      default:
        dispatch(getUserMemos());
        break;
    }

    return () => {
      if (promise) promise.abort();
    };
  }, [path, dispatch, labelName, memoId, history, searchQuery]);

  const closeEditModalHandler = () => {
    setShowEditModal(false);
    history.push(ROUTE.HOME);
    dispatch(memosActions.resetMemo());
    // TODO correct previous page
  };

  const isArchivePage = path === ROUTE.ARCHIVE;
  const pinnedMemo = memos.filter((memo) => memo.isPinned && memo.isArchived === isArchivePage);
  const unpinnedMemo = memos.filter((memo) => !memo.isPinned && memo.isArchived === isArchivePage);

  return (
    <Layout>
      {!editQuery && <EmptyCardEditor />}
      {editQuery && <EditCard />}
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
