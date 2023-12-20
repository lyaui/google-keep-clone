import { useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { useAppSelector } from '@/hooks/useReduxStore';
import type { Color } from '@/types';
import {
  useFetchMemosQuery,
  useFetchMemosByLabelNameQuery,
} from '@/store/apis/memoApi';
import { useUI } from '@/contexts/UI-context';
import { PALETTE_COLORS } from '@/constants/paletteColors';
import * as Icon from '@/components/UI/Icon';
import SkeletonCards from '@/skeletons/SkeletonCards';
import MemoCards from '@/components/MemoCards';
import MemosFilter, { type MemosFilterProps } from '@/components/MemosFilter';
import Hint from '@/components/UI/Hint';

const Search = () => {
  const { labels } = useAppSelector((state) => state.labels);
  const { UIState } = useUI();
  const { theme } = UIState;

  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search).get('q');
  const typeQuery = new URLSearchParams(search).get('type');
  const labelQuery = new URLSearchParams(search).get('label');
  const colorQuery = new URLSearchParams(search).get('color');

  const params = (() => {
    if (searchQuery) return { q: searchQuery };
    if (typeQuery) return { type: typeQuery };
    if (colorQuery) return { color: colorQuery };
    if (labelQuery) return { labelName: labelQuery };
    return {};
  })();

  const { data, isFetching } = labelQuery
    ? useFetchMemosByLabelNameQuery(
        { labelName: labelQuery, params },
        { skip: isEmpty(params) }
      )
    : useFetchMemosQuery(params, { skip: isEmpty(params) });

  const memos = data ? data.memos : [];

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
    name: color as Color,
    value: PALETTE_COLORS[color as Color][theme],
  }));

  const filters: MemosFilterProps[] = [
    { title: '類型', type: 'type', filter: typesFilter },
    { title: '標籤', type: 'label', filter: labelsFilter },
    { title: '顏色', type: 'color', filter: colorsFilter },
  ];

  if (isFetching) return <SkeletonCards />;

  return (
    <div>
      {search ? (
        <MemoCards memos={memos} />
      ) : (
        <>
          {filters.map((_filter) => (
            <MemosFilter key={_filter.type} {..._filter} />
          ))}
        </>
      )}

      {memos.length === 0 && search && (
        <Hint icon={<Icon.SearchOff />} text="找不到相符的搜尋結果" />
      )}
    </div>
  );
};

export default Search;
