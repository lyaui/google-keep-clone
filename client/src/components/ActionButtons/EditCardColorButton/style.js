import styled from 'styled-components/macro';

export const SEditCardColor = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 140px;
  padding: 4px;
  border-radius: 4px;
  background-color: var(--color-bg);
  box-shadow: var(--shadow-sm);
`;

export const SColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin: 4px 2px;
  border-radius: 50%;
  background-color: hsl(var(--color));
  border: 2px solid hsl(var(--border));
  cursor: pointer;
  :hover {
    border: 2px solid var(--color-text);
  }
  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-text);
    opacity: 0.4;
  }
`;
