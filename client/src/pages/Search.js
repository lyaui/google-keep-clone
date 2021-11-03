import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useFetchMemos } from 'hooks/fetchMemos-hook.js';
import { useLocation } from 'react-router-dom';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import * as Icon from 'components/UI/Icon/index.js';
import EditModal from 'components/EditModal';
import Cards from 'components/Cards';
import MemosFilter from 'components/MemosFilter';

const Search = () => {
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get('q');
  const params = useMemo(() => ({ q: searchQuery }), [searchQuery]);
  const { memos } = useFetchMemos({
    action: getUserMemos,
    params,
  });
  const { labels } = useSelector((state) => state.labels);

  const typesFilter = [
    { name: '清單', icon: <Icon.FilterList />, value: 'tasks' },
    { name: '圖片', icon: <Icon.Image />, value: 'images' },
    { name: '網址', icon: <Icon.Link />, value: 'links' },
  ];

  const labelsFilter = labels.map((label) => ({
    name: label.name,
    icon: <Icon.Label />,
    value: label.name,
  }));

  return (
    <div>
      {/* search by types */}
      <MemosFilter title='類型' type='type' filter={typesFilter} />
      {/* search by labels */}
      <MemosFilter title='標籤' type='labels' filter={labelsFilter} />
      {/* search by colors */}
      <MemosFilter title='顏色' type='colors' />

      {/* search results */}
      <Cards memos={memos} />
      {/* editModal */}
      <EditModal />
    </div>
  );
};

export default Search;
