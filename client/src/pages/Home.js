import { useFetchMemos } from 'hooks/fetchMemos-hook.js';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import Cards from 'components/Cards';
import CardEditor from 'components/CardEditor';
import EditModal from 'components/EditModal';

const Home = () => {
  const { pinnedMemo, unpinnedMemo } = useFetchMemos({ action: getUserMemos });

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
