import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import type { Color } from '@/types';
import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import {
  SMemosFilter,
  SMemosFilterTitle,
  SMemosFilterUnit,
  SMemosFilterColor,
  SMemosFilterContainer,
} from '@/components/MemosFilter/style';
import Button from '@/components/UI/Buttons';

interface TypeFilter {
  title: '類型';
  type: 'type';
  filter: { name: string; icon: ReactNode; value: string }[];
}

interface LabelFilter {
  title: '標籤';
  type: 'label';
  filter: { name: string; icon: ReactNode; value: string }[];
}

interface ColorFilter {
  title: '顏色';
  type: 'color';
  filter: { name: Color; value: string }[];
}

export type MemosFilterProps = TypeFilter | LabelFilter | ColorFilter;

function MemosFilter({ title, type, filter = [] }: MemosFilterProps) {
  const navigate = useNavigate();
  const defaultUnits = 4;
  const [showUnitsNum, setShowUnitsNum] = useState(defaultUnits);

  const showButton = type !== 'color' && filter.length > defaultUnits;
  const showButtonProps = {
    showMore: {
      children: '顯示更多',
      onClick: () => setShowUnitsNum(filter.length),
    },
    showLess: {
      children: '顯示較少',
      onClick: () => setShowUnitsNum(defaultUnits),
    },
  };

  const clickFilterHandler =
    ({ type, value }: { type: string; value: string }) =>
    () =>
      navigate({ search: `?${type}=${value}` });

  return (
    <SMemosFilter>
      <SMemosFilterTitle>
        <span>{title}</span>
        {showButton && (
          <Button
            variant="text"
            {...(showUnitsNum === filter.length
              ? showButtonProps['showLess']
              : showButtonProps['showMore'])}
          />
        )}
      </SMemosFilterTitle>
      <SMemosFilterContainer>
        {type === 'color'
          ? (filter as ColorFilter['filter']).map((color) => (
              <Tippy
                key={color.name}
                content={TOOLTIP_TEXT[`COLOR_${color.name}`]}
              >
                <SMemosFilterColor
                  color={color.value}
                  onClick={clickFilterHandler({ type, value: color.name })}
                />
              </Tippy>
            ))
          : (filter as TypeFilter['filter'] | LabelFilter['filter'])
              .slice(0, showUnitsNum)
              .map((filter) => (
                <SMemosFilterUnit
                  key={filter.value}
                  type={type}
                  onClick={clickFilterHandler({ type, value: filter.value })}
                >
                  {filter.icon}
                  <div>{filter.name}</div>
                </SMemosFilterUnit>
              ))}
      </SMemosFilterContainer>
    </SMemosFilter>
  );
}

export default MemosFilter;
