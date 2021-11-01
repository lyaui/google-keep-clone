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
  const { path, url } = match;
  const { search } = useLocation();
  const editQuery = !!new URLSearchParams(search).get('edit');
  const searchQuery = new URLSearchParams(search).get('q');

  const [savedRoute, setSavedRoute] = useState(null);
  const { memos, memo } = useSelector((state) => state.memos);
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

    (async () => {
      switch (path) {
        case ROUTE.HOME:
          promise = dispatch(getUserMemos());
          break;
        case ROUTE.LABEL:
          promise = dispatch(getUserMemosByLabelName(labelName));
          break;
        case ROUTE.MEMO:
          promise = dispatch(getUserMemoByMemoId(memoId));
          break;
        case ROUTE.ARCHIVE:
          promise = dispatch(getUserMemos({ isArchived: true }));
          break;
        case ROUTE.SEARCH:
          if (!searchQuery) return;
          promise = dispatch(getUserMemos({ q: searchQuery }));
          break;
        default:
          promise = dispatch(getUserMemos());
          break;
      }
    })();

    return async () => {
      if (promise) promise.abort();
    };
  }, [path, dispatch, labelName, memoId, history, searchQuery]);

  // open edit modal
  useEffect(() => {
    if (path === ROUTE.MEMO && memo._id) setShowEditModal(true);
  }, [path, memo._id]);

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
