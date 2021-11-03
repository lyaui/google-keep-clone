import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { TOOLTIP_TEXT } from 'constants/tooltipText.js';
import {
  SMemosFilter,
  SMemosFilterTitle,
  SMemosFilterUnit,
  SMemosFilterColor,
  SMemosFilterContainer,
} from 'components/MemosFilter/style.js';

const MemosFilter = ({ title, type, filter = [] }) => {
  const defaultUnits = 4;
  const [showUnitsNum, setShowUnitsNum] = useState(defaultUnits);

  const clickShowMoreHandler = () => setShowUnitsNum(filter.length);
  const clickShowLessHandler = () => setShowUnitsNum(defaultUnits);

  return (
    <SMemosFilter>
      <SMemosFilterTitle>
        <span>{title}</span>
        {type === 'colors' ? null : filter.length <= defaultUnits ? null : showUnitsNum ===
          filter.length ? (
          <button onClick={clickShowLessHandler}>顯示較少</button>
        ) : (
          <button onClick={clickShowMoreHandler}>顯示更多</button>
        )}
      </SMemosFilterTitle>
      <SMemosFilterContainer
        style={{
          '--color': type === 'type' ? 'var(--color-blue)' : 'var(--color-gray-400)',
        }}
      >
        {/* types & labels */}
        {type !== 'colors' &&
          filter.slice(0, showUnitsNum).map((filter, index) => (
            <SMemosFilterUnit type={type} key={index}>
              {filter.icon}
              <div>{filter.name}</div>
            </SMemosFilterUnit>
          ))}

        {/* color */}
        {type === 'colors' &&
          filter.map((color) => (
            <Tippy content={TOOLTIP_TEXT[`COLOR_${color.name}`]}>
              <SMemosFilterColor style={{ '--color': color.value }} />
            </Tippy>
          ))}
      </SMemosFilterContainer>
    </SMemosFilter>
  );
};

export default MemosFilter;
