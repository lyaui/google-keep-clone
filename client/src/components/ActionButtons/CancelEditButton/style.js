import styled from 'styled-components/macro';

export const SCancelEditButton = styled.button`
  color: var(--color-text);
  opacity: 0.6;
  font-size: var(--text-base);
  background-color: transparent;
  padding: 16px;
  margin-left: auto;
  transition: var(--transition);
  &:hover {
    opacity: 1;
  }
`;
