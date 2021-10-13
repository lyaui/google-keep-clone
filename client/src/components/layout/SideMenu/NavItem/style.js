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
    background-color: #f2f3f4;
  }

  button {
    margin-left: 12px;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: ${(props) => (props.isActive ? 'red' : null)};
  }
`;

export const SNavItemText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
