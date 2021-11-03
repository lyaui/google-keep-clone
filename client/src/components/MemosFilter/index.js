import {
  SMemosFilter,
  SMemosFilterTitle,
  SMemosFilterUnit,
  SMemosFilterContainer,
} from 'components/MemosFilter/style.js';

const MemosFilter = ({ title, type, filter = [] }) => {
  return (
    <SMemosFilter>
      <SMemosFilterTitle>
        <span>{title}</span>
        {filter.length > 4 && <button>顯示更多</button>}
      </SMemosFilterTitle>
      <SMemosFilterContainer
        style={{
          '--color': type === 'type' ? 'var(--color-blue)' : 'var(--color-gray-400)',
        }}
      >
        {filter.slice(0, 4).map((filter) => (
          <SMemosFilterUnit type={type}>
            {filter.icon}
            {filter.name}
          </SMemosFilterUnit>
        ))}
      </SMemosFilterContainer>
    </SMemosFilter>
  );
};

export default MemosFilter;
