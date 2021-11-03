import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFetchMemos } from 'hooks/fetchMemos-hook.js';
import { getUserMemos } from 'store/memosSlice/memos-action.js';
import { useUI } from 'contexts/UI-context';
import { PALETTE_COLORS } from 'constants/paletteColors.js';
import * as Icon from 'components/UI/Icon/index.js';
import EditModal from 'components/EditModal';
import Cards from 'components/Cards';
import MemosFilter from 'components/MemosFilter';

const Search = () => {
  const { labels } = useSelector((state) => state.labels);
  const { UIState } = useUI();
  const { theme } = UIState;

  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get('q');
  const typeQuery = new URLSearchParams(search).get('type');
  const labelQuery = new URLSearchParams(search).get('label');
  const colorQuery = new URLSearchParams(search).get('color');

  const params = useMemo(() => {
    return searchQuery
      ? { q: searchQuery }
      : typeQuery
      ? { type: typeQuery }
      : labelQuery
      ? { label: labelQuery }
      : colorQuery
      ? { color: colorQuery }
      : null;
  }, [searchQuery, typeQuery, labelQuery, colorQuery]);

  const { memos } = useFetchMemos({
    action: getUserMemos,
    params,
  });

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

  const colorsFilter = Object.keys(PALETTE_COLORS).map((color) => ({
    name: color,
    value: PALETTE_COLORS[color][theme],
  }));

  return (
    <div>
      {/* search by types */}
      <MemosFilter title='類型' type='type' filter={typesFilter} />
      {/* search by labels */}
      <MemosFilter title='標籤' type='label' filter={labelsFilter} />
      {/* search by colors */}
      <MemosFilter title='顏色' type='color' filter={colorsFilter} />

      {/* search results */}
      <Cards memos={memos} />
      {/* editModal */}
      <EditModal />
    </div>
  );
};

export default Search;
