import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import { ROUTE } from 'constants/routes.js';
import Cards from 'components/Cards';
import CardEditor from 'components/CardEditor';
import EditModal from 'components/EditModal';

const Home = () => {
  const dispatch = useDispatch();
  const { memos } = useSelector((state) => state.memos);
  const { path } = useRouteMatch();

  // fetch memos
  useEffect(() => {
    if (path === ROUTE.MEMO) return;
    const promise = dispatch(getUserMemos());
    return async () => promise.abort();
  }, [path, dispatch]);

  const isArchivePage = path === ROUTE.ARCHIVE;
  const pinnedMemo = memos.filter((memo) => memo.isPinned && memo.isArchived === isArchivePage);
  const unpinnedMemo = memos.filter((memo) => !memo.isPinned && memo.isArchived === isArchivePage);

  return (
    <div>
      {/* editor */}
      <CardEditor />
      {/* isPinned === true */}
      {pinnedMemo.length > 0 && <Cards memos={pinnedMemo} title={'已固定'} />}
      {/* isPinned === false */}
      {unpinnedMemo.length > 0 && (
        <Cards memos={unpinnedMemo} title={pinnedMemo.length > 0 ? '其他記事' : ''} />
      )}
      {/* editModal */}
      <EditModal />
    </div>
  );
};

export default Home;
