import styled from 'styled-components';

export const SMemosFilter = styled.div`
  max-width: 800px;
  padding: 10px;
  margin: 16px auto;
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-memos-filter-bg);
  overflow: hidden;
  transition: var(--transition);
`;

export const SMemosFilterTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-size: var(--text-md);
  color: var(--color-text);
  font-weight: var(--font-bold);
  span {
    display: block;
  }
  button {
    display: block;
    margin-left: auto;
    font-size: var(--text-base);
    letter-spacing: unset;
    font-weight: var(--font-bold);
    color: hsla(var(--color-blue), 1);
  }
`;

export const SMemosFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  gap: 4px;
`;

export const SMemosFilterUnit = styled.div<{ type: string }>`
  height: 160px;
  width: calc(25% - 3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: hsl(
    var(
      ${(props) => {
        if (props.type === 'type') return '--color-gray-100';
        return '--color-gray-400';
      }}
    )
  );
  font-size: var(--text-base);
  font-weight: var(--font-light);
  cursor: pointer;
  transition: var(--transition);
  background-color: hsl(
    var(
      ${(props) => {
        if (props.type === 'type') return '--color-blue';
        return '--color-gray-300';
      }}
    ),
    ${(props) => {
      if (props.type === 'type') return 0.8;
      return 0.2;
    }}
  );
  div {
    width: 100%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
`;

export const SMemosFilterColor = styled.div<{ color: string }>`
  width: 52px;
  height: 52px;
  margin: 12px;
  border-radius: var(--rounded-full);
  border: 1px solid hsl(var(--color-gray-400));
  background-color: hsl(${(props) => props.color});
  opacity: 0.8;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
