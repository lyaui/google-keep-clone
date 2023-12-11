import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFetchMemos } from '@/hooks/fetchMemos-hook.js';
import {
  getUserMemos,
  getUserMemosByLabelName,
} from '@/store/memosSlice/memos-action.js';
import { useUI } from '@/contexts/UI-context';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import * as Icon from '@/components/UI/Icon';
import SkeletonCards from '@/skeletons/SkeletonCards';
import Cards from '@/components/Cards';
import MemosFilter from '@/components/MemosFilter';
import Hint from '@/components/UI/Hint';

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
        : colorQuery
          ? { color: colorQuery }
          : labelQuery
            ? { labelName: labelQuery }
            : null;
  }, [searchQuery, typeQuery, labelQuery, colorQuery]);

  const action = !params
    ? null
    : labelQuery
      ? getUserMemosByLabelName
      : getUserMemos;
  const { memos, isLoading } = useFetchMemos({ action, params });

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

  const showCards = !isLoading && search;
  const showHint = memos.length === 0 && !isLoading && search;

  return (
    <div>
      {/* skeleton */}
      {isLoading && <SkeletonCards />}

      {/* filters */}
      {!search && (
        <div>
          {/* search by types */}
          <MemosFilter title="類型" type="type" filter={typesFilter} />
          {/* search by labels */}
          <MemosFilter title="標籤" type="label" filter={labelsFilter} />
          {/* search by colors */}
          <MemosFilter title="顏色" type="color" filter={colorsFilter} />
        </div>
      )}

      {/* search results */}
      {showCards && <Cards memos={memos} />}

      {/* hint */}
      {showHint && (
        <Hint icon={<Icon.SearchOff />} text="找不到相符的搜尋結果" />
      )}
    </div>
  );
};

export default Search;
