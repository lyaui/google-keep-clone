import styled from 'styled-components/macro';

export const SMemosFilter = styled.div`
  max-width: 800px;
  padding: 10px;
  margin: 16px auto;
  color: var(--color-text);
  font-size: var(--text-md);
  font-weight: var(--font-bold);
  border-radius: var(--rounded-md);
  box-shadow: var(--shadow-sm);
  background-color: var(--color-memos-filter-bg);
  overflow: hidden;
  transition: var(--transition);
`;

export const SMemosFilterTitle = styled.div`
  display: flex;
  margin-bottom: 20px;
  span {
    display: block;
  }
  button {
    display: block;
    margin-left: auto;
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

export const SMemosFilterUnit = styled.div`
  height: 160px;
  width: calc(25% - 3px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: hsl(var(--color-gray-500));
  font-size: var(--text-sm);
  font-weight: var(--font-light);
  background-color: hsl(var(--color), 0.1);
  cursor: pointer;
  transition: var(--transition);

  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }
  &[type='type'] {
    background-color: hsla(var(--color), 0.8);
    color: hsl(var(--color-gray-100));
  }

  opacity: 0.9;

  :hover {
    opacity: 1;
  }
`;
