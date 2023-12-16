import styled from 'styled-components';

export const SNavItem = styled.li<{ isFixedMenu: boolean }>`
  margin-left: ${(props) => (props.isFixedMenu ? '-20px' : '10px')};
  padding-left: ${(props) => (props.isFixedMenu ? '20px' : '0px')};
  border-radius: var(--rounded-xl);
  list-style: none;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition);
  display: flex;
  align-items: center;
  &:hover {
    background-color: var(--color-hover-bg);
  }
  button {
    margin-left: ${(props) => (props.isFixedMenu ? '15px' : '5px')};
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
