import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '@/hooks/useReduxStore';

import type { Color } from '@/types';
import { useFetchMemos } from '@/hooks/fetchMemos-hook';
import {
  getUserMemos,
  getUserMemosByLabelName,
} from '@/store/memosSlice/memos-action';
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

  const params = useMemo(() => {
    if (searchQuery) return { q: searchQuery };
    if (typeQuery) return { type: typeQuery };
    if (colorQuery) return { color: colorQuery };
    if (labelQuery) return { labelName: labelQuery };

    return null;
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
    name: color as Color,
    value: PALETTE_COLORS[color as Color][theme],
  }));

  const filters: MemosFilterProps[] = [
    { title: '類型', type: 'type', filter: typesFilter },
    { title: '標籤', type: 'label', filter: labelsFilter },
    { title: '顏色', type: 'color', filter: colorsFilter },
  ];

  if (isLoading) return <SkeletonCards />;

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
