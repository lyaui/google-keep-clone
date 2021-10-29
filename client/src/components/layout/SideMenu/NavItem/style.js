import styled from 'styled-components/macro';

export const SNavItem = styled.li`
  margin-left: 2px;
  border-radius: 0 25px 25px 0;
  list-style: none;
  cursor: pointer;
  overflow: hidden;
  height: 50px;
  transition: all 0.2s;
  display: flex;
  align-items: center;

  :hover {
    background-color: var(--color-menu-hover-bg);
  }

  button {
    margin-left: 12px;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`;

export const SNavItemText = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-text);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
