import styled from 'styled-components/macro';

export const SNavItem = styled.li`
  margin-left: var(--margin);
  padding-left: var(--padding);
  border-radius: var(--rounded-xl);
  list-style: none;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  align-items: center;
  :hover {
    background-color: var(--color-hover-bg);
  }
  button {
    margin-left: var(--margin-button);
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

export const SNavItemText = styled.span`
  font-size: var(--text-base);
  color: var(--color-text);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
