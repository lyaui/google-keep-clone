import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { TOOLTIP_TEXT } from '@/constants/tooltipText';
import {
  SMemosFilter,
  SMemosFilterTitle,
  SMemosFilterUnit,
  SMemosFilterColor,
  SMemosFilterContainer,
} from '@/components/MemosFilter/style';

function MemosFilter({ title, type, filter = [] }) {
  const navigate = useNavigate();
  const defaultUnits = 4;
  const [showUnitsNum, setShowUnitsNum] = useState(defaultUnits);

  const clickShowMoreHandler = () => setShowUnitsNum(filter.length);
  const clickShowLessHandler = () => setShowUnitsNum(defaultUnits);

  const clickFilterHandler =
    ({ type, value }) =>
    () =>
      navigate({ search: `?${type}=${value}` });

  return (
    <SMemosFilter>
      <SMemosFilterTitle>
        <span>{title}</span>
        {type === 'color' ? null : filter.length <=
          defaultUnits ? null : showUnitsNum === filter.length ? (
          <button onClick={clickShowLessHandler}>顯示較少</button>
        ) : (
          <button onClick={clickShowMoreHandler}>顯示更多</button>
        )}
      </SMemosFilterTitle>
      <SMemosFilterContainer
        style={{
          '--color':
            type === 'type' ? 'var(--color-blue)' : 'var(--color-gray-400)',
        }}
      >
        {/* types & labels */}
        {type !== 'color' &&
          filter.slice(0, showUnitsNum).map((filter, index) => (
            <SMemosFilterUnit
              type={type}
              key={index}
              onClick={clickFilterHandler({ type, value: filter.value })}
            >
              {filter.icon}
              <div>{filter.name}</div>
            </SMemosFilterUnit>
          ))}

        {/* color */}
        {type === 'color' &&
          filter.map((color) => (
            <Tippy
              content={TOOLTIP_TEXT[`COLOR_${color.name}`]}
              key={color.name}
            >
              <SMemosFilterColor
                style={{ '--color': color.value }}
                onClick={clickFilterHandler({ type, value: color.name })}
              />
            </Tippy>
          ))}
      </SMemosFilterContainer>
    </SMemosFilter>
  );
}

export default MemosFilter;
