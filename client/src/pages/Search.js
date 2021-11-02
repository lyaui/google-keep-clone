import { useMemo } from 'react';
import { useFetchMemos } from 'hooks/fetchMemos-hook.js';
import { useLocation } from 'react-router-dom';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import EditModal from 'components/EditModal';
import Cards from 'components/Cards';

const Search = () => {
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get('q');
  const params = useMemo(() => ({ q: searchQuery }), [searchQuery]);
  const { memos } = useFetchMemos({
    action: getUserMemos,
    params,
  });

  return (
    <div>
      <Cards memos={memos} />
      {/* editModal */}
      <EditModal />
    </div>
  );
};

export default Search;
